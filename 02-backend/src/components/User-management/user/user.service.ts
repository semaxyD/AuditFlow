import { Injectable, NotFoundException, BadRequestException} from '@nestjs/common';
import { QueryFilterService } from '../../../imports-barrel';
import { LoginDto } from './login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UserService {
  constructor(
    private readonly queryFilter: QueryFilterService,
    private readonly jwtService: JwtService
  ) {}

  //Crear users(Solo para Admins)
  async crearUsuario(data: any) {
    const { name, email, password, role } = data;
  
    // llamado a las queries necesarias
    const buscarUsuarioPorEmail = await this.queryFilter.filterQuery('getUserByEmail', 'user-queries', email);
  
    if (buscarUsuarioPorEmail) {
      throw new BadRequestException('El correo ya está registrado');
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const nuevoUsuario = await this.queryFilter.filterQuery('createUser', 'user-queries',
      {
      name,
      email,
      password: hashedPassword,
      role,
      });
      
    return {
      message: 'Usuario registrado correctamente',
      id: nuevoUsuario.id,
    };
  }
  

  async login(dto: LoginDto): Promise<{ message: string; access_token: string }> {
    // Buscar al usuario en la base de datos usando su correo electrónico
    const user = await this.queryFilter.filterQuery('getUserByEmail', 'user-queries', dto.email);

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
    const usuarios = await this.queryFilter.filterQuery('searchUser', 'user-queries');

    return {
      message: 'Usuarios encontrados correctamente',
      data: usuarios,
    };
  }

  // devuelve los campos del usuario por id
  async obtenerUsuarioPorId(id: number) {

  
  const obtenerUsuarioPorId = await this.queryFilter.filterQuery('getUserById', 'user-queries',id);

  if (!obtenerUsuarioPorId) {
    throw new NotFoundException('Usuario no encontrado');
  }

  return {
    message: 'Usuario cargado correctamente',
    data: obtenerUsuarioPorId,
    };
  
  }
}
