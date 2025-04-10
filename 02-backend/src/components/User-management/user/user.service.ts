import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../../../../../03-data-access/src/components/system-schema/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { PrismaService } from '@data-access/src/prisma/prisma.service'
import { User } from '@data-access/node_modules/@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  //cambiar la logica de implementacion entre el ORM y el metodo de crearUsuario
  /*constructor(
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>, // Repositorio para acceder a la tabla de usuarios
  ) {}*/

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

  //Buscar user por medio de su email para el login
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

}
