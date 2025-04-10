import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../../../../../03-data-access/src/components/system-schema/user.entity';
import { PrismaService } from '@data-access/src/prisma/prisma.service'

@Module({
  // Importa el repositorio de la entidad Usuario para poder usarlo en el servicio
  imports: [TypeOrmModule.forFeature([Usuario])],

  // Controlador que maneja las rutas relacionadas a usuarios
  controllers: [UserController],

  // Servicio que contiene la lógica para manejar usuarios
  providers: [UserService,PrismaService],

  //exportar para que otro modulo pueda acceder a el
  exports: [UserService],
})
export class UserModule {}
