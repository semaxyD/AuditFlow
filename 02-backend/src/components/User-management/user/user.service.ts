import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { QueryFilterService } from '../../../imports-barrel';
import { LoginDto } from './login.dto';
import { UpdateFrequencyDto } from './update-frecuency.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateCompanyDto } from './create-company.dto';
import { UpdateCompanyDto } from './update-compant.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly queryFilter: QueryFilterService,
    private readonly jwtService: JwtService,
  ) {}

  async CompaniesList() {
    try {
      const companies = await this.queryFilter.filterQuery(
        'getListCompanies',
        'company-queries',
      );
      return companies;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error fetching evaluations',
        error,
      );
    }
  }

  //Crear users(Solo para Admins)
  async crearUsuario(data: any) {
    const { name, email, password, role, companyIds } = data;

    const buscarUsuarioPorEmail = await this.queryFilter.filterQuery(
      'getUserByEmail',
      'user-queries',
      email,
    );

    if (buscarUsuarioPorEmail) {
      throw new BadRequestException('El correo ya está registrado');
    }

    if (role === 'auditor_interno') {
      if (!companyIds || companyIds.length !== 1) {
        throw new BadRequestException(
          'El auditor interno debe estar asociado a una única empresa',
        );
      }
    } else if (role === 'auditor_externo') {
      if (!companyIds || companyIds.length < 1) {
        throw new BadRequestException(
          'El auditor externo debe estar asociado al menos a una empresa',
        );
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await this.queryFilter.filterQuery(
      'createUser',
      'user-queries',
      {
        name,
        email,
        password: hashedPassword,
        role,
        companyIds: role == 'admin' ? [] : companyIds,
      },
    );

    return {
      message: 'Usuario registrado correctamente',
      id: nuevoUsuario.id,
    };
  }

  async login(
    dto: LoginDto,
  ): Promise<{ message: string; access_token: string }> {
    // Buscar al usuario en la base de datos usando su correo electrónico
    const user = await this.queryFilter.filterQuery(
      'getUserByEmail',
      'user-queries',
      dto.email,
    );

    // Si no se encuentra el usuario, se lanza una excepción
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    // Comparar la contraseña ingresada con la almacenada en la base de datos
    const passwordMatches = await bcrypt.compare(dto.password, user.password);

    // Si la contraseña no coincide, se lanza una excepción
    if (!passwordMatches) {
      throw new NotFoundException('Contraseña incorrecta');
    }

    //Generacion de token JWT
    const payload = {
      email: user.email,
      id: user.id,
      role: user.role,
      name: user.name,
    };

    const access_token = this.jwtService.sign(payload);

    // Si todo es correcto, se retorna el mensaje y token jwt
    return {
      message: 'Inicio de sesión exitoso',
      access_token,
    };
  }

  // solo admins
  // método que devuelve los usuarios
  async buscarUsuarios() {
    const usuarios = await this.queryFilter.filterQuery(
      'searchUser',
      'user-queries',
    );

    return {
      message: 'Usuarios encontrados correctamente',
      data: usuarios,
    };
  }

  // devuelve los campos del usuario por id
  async obtenerUsuarioPorId(id: number) {
    const obtenerUsuarioPorId = await this.queryFilter.filterQuery(
      'getUserById',
      'user-queries',
      id,
    );

    if (!obtenerUsuarioPorId) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return {
      message: 'Usuario cargado correctamente',
      data: obtenerUsuarioPorId,
    };
  }

  //HU017 Trae las normas para armar el Body para el service updateFrequency
  async getIdByNormToConfig() {
    try {
      const query = await this.queryFilter.filterQuery('getAllNormsBasicInfo', 'norm-queries');
      return query
    } catch (error) {
      throw new InternalServerErrorException('Error al obtener las normas para configurar frecuencia', error);
    }
  }

  //HU017 Trae las empresas del user elejido para armar el Body para el service updateFrequency
  async getCompaniesByUserId(userId: number) {
    return this.queryFilter.filterQuery(
      'getCompaniesByUserId',
      'user-queries',
      userId
    );
  }

  //HU017 configuracion de frecuencia a un usuario para evaluar una norma para una empresa
  async updateFrequency(frecuencyDto: UpdateFrequencyDto) {

    const result = await this.queryFilter.filterQuery(
      'upsertFrequencyConfig',
      'evaluation-frecuency-queries',
      frecuencyDto);

    if (!result) {
    throw new InternalServerErrorException('No se pudo actualizar la frecuencia');
    }

    return { message: 'Frecuencia actualizada correctamente', config: result};
  }

  //HU016 - crear compañia
  async createCompany(dto: CreateCompanyDto) {
    const existing = await this.queryFilter.filterQuery(
      'getCompanyByName',
      'company-queries',
      dto.name,
    );

    if (existing) {
      throw new BadRequestException('Ya existe una empresa con ese nombre');
    }

    return this.queryFilter.filterQuery(
      'createCompany',
      'company-queries',
      dto,
    );
  }

  //HU016 - modificar compañia
  async updateCompany(companyId: number, dto: UpdateCompanyDto) {
    const company = await this.queryFilter.filterQuery(
      'getCompanyById',
      'company-queries',
      companyId,
    );

    if (!company) {
      throw new NotFoundException('Empresa no encontrada para modificar');
    }

    return this.queryFilter.filterQuery(
      'updateCompany',
      'company-queries',
      { companyId, ...dto },
    );
  }

    //HU016 - eliminar compañia
  async deleteCompany(id: number) {
    const company = await this.queryFilter.filterQuery(
      'getCompanyById',
      'company-queries',
      id,
    );

    if (!company) {
      throw new NotFoundException('Empresa no encontrada para eliminar');
    }

    return this.queryFilter.filterQuery(
      'deleteCompany',
      'compound-deletes',
      id,
    );
  }

}
