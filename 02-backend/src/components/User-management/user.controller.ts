import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user-service';
import { Usuario } from '../../../../03-data-access/src/components/system-schema/user.entity';
import { CreateUserDto } from './create-user.dto';

@Controller('usuarios')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async crear(@Body() datos: CreateUserDto) {
    return this.userService.crearUsuario(datos);
  }
}