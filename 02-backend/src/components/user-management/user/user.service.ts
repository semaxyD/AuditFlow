import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from '@data-access/database.service';

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

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
}
