import { Injectable, NotFoundException, BadRequestException} from '@nestjs/common';
import { QueryFilterService } from '@data-access/src/components/query-manager/query-filter.service';
import { LoginDto } from './login.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@data-access/src/prismaconfig/prisma-types';


@Injectable()
export class UserService {
  constructor(private readonly queryFilter: QueryFilterService) {}

  //Crear users(Solo para Admins)
  async crearUsuario(data: any) {
    const { name, email, password, role } = data;
  
    // llamado a las queries necesarias
    const buscarUsuarioPorEmail = await this.queryFilter.filterQuery('read', 'getUserByEmail', data.email);
    const crearUsuario = await this.queryFilter.filterQuery('write', 'createUser');
  
    if (buscarUsuarioPorEmail) {
      throw new BadRequestException('El correo ya está registrado');
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const nuevoUsuario = await crearUsuario({
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
  

  async login(dto: LoginDto): Promise<{ message: string; userModel: Partial<User> }> {
    // Buscar al usuario en la base de datos usando su correo electrónico
    const user = await this.queryFilter.filterQuery('read', 'getUserByEmail', dto.email);

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

    // Si todo es correcto, se retorna el mensaje y el usuario sin su contraseña
    return {
      message: 'Inicio de sesión exitoso',
      userModel: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }
  
  // solo admins
  // método que devuelve los usuarios
  async buscarUsuarios() {
    const buscarUsuarios = await this.queryFilter.filterQuery('read', 'searchUser');

    const usuarios = await buscarUsuarios();
  
    return {
      message: 'Usuarios encontrados correctamente',
      data: usuarios,
    };
  }

  // devuelve los campos del usuario por id
  async obtenerUsuarioPorId(id: number) {
  
  const obtenerUsuarioPorId = await this.queryFilter.filterQuery('read', 'getUserById');

  const usuario = await obtenerUsuarioPorId(id)

  if (!usuario) {
    throw new NotFoundException('Usuario no encontrado');
  }

  return {
    message: 'Usuario cargado correctamente',
    data: usuario,
    };
  
  }
}
