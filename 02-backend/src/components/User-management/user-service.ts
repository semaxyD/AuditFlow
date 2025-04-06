import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../../../../03-data-access/src/components/system-schema/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>, // Repositorio para acceder a la tabla de usuarios
  ) {}

  async crearUsuario(dto: CreateUserDto): Promise<any> {
    // Validar si el correo ya existe en la base de datos
    const existe = await this.usuarioRepo.findOneBy({ correo: dto.correo });
    if (existe) {
      throw new BadRequestException('El correo ya está registrado'); // Si ya existe, lanza error
    }

    // Si no existe, crea y guarda un nuevo usuario
    const nuevo = this.usuarioRepo.create(dto);
    const usuario = await this.usuarioRepo.save(nuevo);

    // Retorna mensaje de éxito y los datos del usuario
    return {
      message: 'Usuario registrado correctamente',
      usuario,
    };
  }
}
