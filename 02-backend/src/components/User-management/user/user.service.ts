import { Injectable, NotFoundException, BadRequestException} from '@nestjs/common';
import { PrismaService } from '@data-access/src/prismaconfig/prisma.service';
import { LoginDto } from './login.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@data-access/src/prismaconfig/prisma-types';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //Crear users(Solo para Admins)
  async crearUsuario(data: any) {
    const { name, email, password, role } = data;
  
    // Verificar si ya existe un usuario con ese email
    const usuarioExistente = await this.prisma.user.findUnique({
      where: { email },
    });
  
    if (usuarioExistente) {
      throw new BadRequestException('El correo ya está registrado');
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const nuevoUsuario = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
  
    return {
      message: 'Usuario registrado correctamente',
      id: nuevoUsuario.id,
    };
  }
  

  async login(dto: LoginDto): Promise<{ message: string; userModel: Partial<User> }> {
    // Buscar al usuario en la base de datos usando su correo electrónico
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

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
    const usuarios = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
  
    return {
      message: 'Usuarios encontrados correctamente',
      data: usuarios,
    };
  }

  // devuelve los campos del usuario por id
async obtenerUsuarioPorId(id: number) {
  const usuario = await this.prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      // no se incluyeron las relaciones
    },
  });

  if (!usuario) {
    throw new NotFoundException('Usuario no encontrado');
  }

  return {
    message: 'Usuario cargado correctamente',
    data: usuario,
    };
  
  }
}
