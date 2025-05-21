import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
  LoggerService,
  Logger
} from '@nestjs/common';
import { QueryFilterService } from '../../../imports-barrel';
import { LoginDto } from './login.dto';
import { UpdateFrequencyDto } from './update-frecuency.dto';
import { DeleteFrequencyDto } from './delete-frecuency.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateCompanyDto } from './create-company.dto';
import { UpdateCompanyDto } from './update-company.dto';
import { UpdateUserDto } from './update-user.dto';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    private readonly queryFilter: QueryFilterService,
    private readonly jwtService: JwtService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {
    this.logger = new Logger(UserService.name);
   }

  async CompaniesList() {
    this.logger.log('Obteniendo lista de empresas');
    try {
      const companies = await this.queryFilter.filterQuery(
        'getListCompanies',
        'company-queries',
      );
      this.logger.log(`Se obtuvieron ${companies.length} empresas`);
      return companies;
    } catch (error) {
      this.logger.error('Error al obtener empresas', error.stack);
      throw new InternalServerErrorException(
        'Error fetching evaluations'
      );
    }
  }

  //Crear users(Solo para Admins)
  async crearUsuario(data: any) {
    const { name, email, password, role, companyIds } = data;
    this.logger.log(`Intentando crear usuario con email: ${email}`);

    const buscarUsuarioPorEmail = await this.queryFilter.filterQuery(
      'getUserByEmail',
      'user-queries',
      email,
    );

    if (buscarUsuarioPorEmail) {
      this.logger.warn(`El correo ${email} ya está registrado`);
      throw new BadRequestException('El correo ya está registrado');
    }

    if (role === 'auditor_interno') {
      if (!companyIds || companyIds.length !== 1) {
        this.logger.warn('Auditor interno debe tener una única empresa');
        throw new BadRequestException(
          'El auditor interno debe estar asociado a una única empresa',
        );
      }
    } else if (role === 'auditor_externo') {
      if (!companyIds || companyIds.length < 1) {
        this.logger.warn('Auditor externo debe tener al menos una empresa');
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
    this.logger.log(`Usuario creado con ID: ${nuevoUsuario.id}`);

    return {
      message: 'Usuario registrado correctamente',
      id: nuevoUsuario.id,
    };
  }

  async login(
    dto: LoginDto,
  ): Promise<{ message: string; access_token: string }> {
    this.logger.log(`Intentando login para el usuario: ${dto.email}`);

    // Buscar al usuario en la base de datos usando su correo electrónico
    const user = await this.queryFilter.filterQuery(
      'getUserByEmail',
      'user-queries',
      dto.email,
    );

    // Si no se encuentra el usuario, se lanza una excepción
    if (!user) {
      this.logger.warn(`Usuario no encontrado con email: ${dto.email}`);
      throw new NotFoundException('Usuario no encontrado');
    }

    // Comparar la contraseña ingresada con la almacenada en la base de datos
    const passwordMatches = await bcrypt.compare(dto.password, user.password);

    // Si la contraseña no coincide, se lanza una excepción
    if (!passwordMatches) {
      this.logger.warn('Contraseña incorrecta');
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
    this.logger.log(`Login exitoso para: ${user.email}`);

    // Si todo es correcto, se retorna el mensaje y token jwt
    return {
      message: 'Inicio de sesión exitoso',
      access_token,
    };
  }

  // solo admins
  // método que devuelve los usuarios
  async buscarUsuarios() {
    this.logger.log('Buscando todos los usuarios');
    const usuarios = await this.queryFilter.filterQuery(
      'searchUser',
      'user-queries',
    );
    this.logger.log(`Se encontraron ${usuarios.length} usuarios`);

    return {
      message: 'Usuarios encontrados correctamente',
      data: usuarios,
    };
  }

  // devuelve los campos del usuario por id
  async obtenerUsuarioPorId(id: number) {
    this.logger.log(`Obteniendo usuario con ID: ${id}`);
    const obtenerUsuarioPorId = await this.queryFilter.filterQuery(
      'getUserById',
      'user-queries',
      id,
    );

    if (!obtenerUsuarioPorId) {
      this.logger.warn(`Usuario con ID ${id} no encontrado`);
      throw new NotFoundException('Usuario no encontrado');
    }

    return {
      message: 'Usuario cargado correctamente',
      data: obtenerUsuarioPorId,
    };
  }

  //HU017 Trae las normas para armar el Body para el service updateFrequency
  async getIdByNormToConfig() {
    this.logger.log('Obteniendo normas para configuración de frecuencia');
    try {
      const query = await this.queryFilter.filterQuery('getAllNormsBasicInfo', 'norm-queries');
      return query
    } catch (error) {
      this.logger.error('Error al obtener normas', error.stack);
      throw new InternalServerErrorException('Error al obtener las normas para configurar frecuencia');
    }
  }

  //HU017 Trae las empresas del user elejido para armar el Body para el service updateFrequency
  async getCompaniesByUserId(userId: number) {
    this.logger.log(`Obteniendo empresas del usuario con ID: ${userId}`);

    return this.queryFilter.filterQuery(
      'getCompaniesByUserId',
      'user-queries',
      userId
    );
  }

  //HU017 configuracion de frecuencia a un usuario para evaluar una norma para una empresa
  async updateFrequency(frecuencyDto: UpdateFrequencyDto) {
    this.logger.log(`Actualizando frecuencia para norma ${frecuencyDto.normId} y user ${frecuencyDto.userId}`);

    const result = await this.queryFilter.filterQuery(
      'upsertFrequencyConfig',
      'evaluation-frecuency-queries',
      frecuencyDto);

    if (!result) {
      this.logger.error('No se pudo actualizar la frecuencia');
      throw new InternalServerErrorException('No se pudo actualizar la frecuencia');
    }

    return { message: 'Frecuencia actualizada correctamente', config: result };
  }


  //HU016 - crear compañia
  async createCompany(dto: CreateCompanyDto) {
    this.logger.log(`Creando empresa con nombre: ${dto.name}`);
    const existing = await this.queryFilter.filterQuery(
      'getCompanyByName',
      'company-queries',
      dto.name
    );

    if (existing) {
      this.logger.warn(`Empresa duplicada: ${dto.name}`);
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
    this.logger.log(`Actualizando empresa con ID: ${companyId}`);
    const company = await this.queryFilter.filterQuery(
      'getCompanyById',
      'company-queries',
      companyId,
    );

    if (!company) {
      this.logger.warn(`Empresa con ID ${companyId} no encontrada`);
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
    this.logger.log(`Eliminando empresa con ID: ${id}`);
    const company = await this.queryFilter.filterQuery(
      'getCompanyById',
      'company-queries',
      id,
    );

    if (!company) {
      this.logger.warn(`Empresa con ID ${id} no encontrada`);
      throw new NotFoundException('Empresa no encontrada para eliminar');
    }

    return this.queryFilter.filterQuery(
      'deleteCompany',
      'compound-deletes',
      id,
    );
  }

  //HU017 - eliminar configuraciones de frecuencias
  async deleteFrequency(dto: DeleteFrequencyDto) {
    this.logger.log(`Eliminando configuración de frecuencia para user ${dto.userId}, norm ${dto.normId}, company ${dto.companyId}`);
    try {
      const deleted = await this.queryFilter.filterQuery(
        'deleteFrequencyConfig',
        'evaluation-frecuency-queries',
        dto
      );

      return { message: 'Configuración eliminada correctamente',deleted };
    } catch (error) {
      if (
        error.code === 'P2025' ||
        error.message?.includes('No Record found') // por si acaso en ambiente dev
      ) {
        this.logger.warn('Configuración no encontrada');
        throw new NotFoundException('No existe una configuración con esos datos');
      }
      this.logger.error('Error al eliminar la configuración', error.stack);
      throw new InternalServerErrorException('Error al eliminar la configuración');
    }
  }
  //modificar usuario
  async updateUser(id: number, dto: UpdateUserDto) {
    this.logger.log(`Actualizando usuario con ID: ${id}`);
    const user = await this.queryFilter.filterQuery(
      'getUserById',
      'user-queries',
      id,
    );

    if (!user) {
      this.logger.warn(`Usuario con ID ${id} no encontrado`);
      throw new NotFoundException('Usuario no encontrado');
    }

    if (dto.email) {
      const emailExists = await this.queryFilter.filterQuery(
        'getUserByEmail',
        'user-queries',
        dto.email,
      );

      if (emailExists && emailExists.id !== id) {
        this.logger.warn(`Email ${dto.email} ya en uso`);
        throw new BadRequestException('El correo ya está en uso');
      }
    }

    const updated = await this.queryFilter.filterQuery(
      'updateUserById',
      'user-queries',
      { id, ...dto },
    );

    return {
      message: 'Usuario actualizado correctamente',
      data: updated,
    };
  }

  //Eliminar usuario

  async deleteUser(userId: number) {
    this.logger.log(`Eliminando usuario con ID: ${userId}`);
  const user = await this.queryFilter.filterQuery(
    'getUserById',
    'user-queries',
    userId,
  );

  if (!user) {
    this.logger.warn(`Usuario con ID ${userId} no encontrado`);
    throw new NotFoundException('Usuario no encontrado');
  }

  const deleted = await this.queryFilter.filterQuery(
    'deleteUser',
    'compound-deletes',
    userId,
  );

  // Sanitizar
  const { password, ...safeUser } = deleted;

  return {
    message: 'Usuario eliminado correctamente junto con sus datos relacionados',
    data: safeUser,
  };
}


}