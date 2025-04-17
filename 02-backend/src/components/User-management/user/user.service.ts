import { Injectable, NotFoundException, BadRequestException} from '@nestjs/common';
import { PrismaService } from '@data-access/src/prisma/prisma.service';
import { LoginDto } from './login.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@data-access/src/prisma/prisma-types'; // Asegúrate de que esto sea el tipo correcto

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async crearUsuario(data: any) {
    const { nombre, correo, contrasena, rol } = data;

    // Verificar si ya existe un usuario con ese correo
    const usuarioExistente = await this.db.user.findUnique({
      where: { correo },
    });

    if (usuarioExistente) {
      throw new BadRequestException('El correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const nuevoUsuario = await this.db.user.create({
      data: {
        nombre,
        correo,
        contrasena: hashedPassword,
        rol,
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
        rol: user.rol,
      },
    };
  }
}

