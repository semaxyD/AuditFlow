import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user-service';
import { CreateUserDto } from './create-user.dto';

@Controller('usuarios') // Ruta base: http://localhost:3001/usuarios
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post() // Maneja las solicitudes POST para registrar usuarios
  async crear(@Body() datos: CreateUserDto) {
    // Llama al servicio para crear el usuario con los datos recibidos
    return this.userService.crearUsuario(datos);
  }
}
