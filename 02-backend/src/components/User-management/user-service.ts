import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../../../../03-data-access/src/components/system-schema/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
  ) {}

  async crearUsuario(dto: CreateUserDto): Promise<any> {
    const existe = await this.usuarioRepo.findOneBy({ correo: dto.correo });
    if (existe) {
      throw new BadRequestException('El correo ya está registrado');
    }

    const nuevo = this.usuarioRepo.create(dto);
    const usuario = await this.usuarioRepo.save(nuevo);
    return {
      message: 'Usuario registrado correctamente',
      usuario,
    };
  }
}

