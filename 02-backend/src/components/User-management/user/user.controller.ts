import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';

@Controller('user') // Ruta base: http://localhost:3001/usuarios
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post() // Maneja las solicitudes POST para registrar usuarios
  async crear(@Body() datos: CreateUserDto) {
    // Llama al servicio para crear el usuario con los datos recibidos
    return this.userService.crearUsuario(datos);
  }

  @Get('by-email')
  async getUserByEmail(@Query('email')email: string){
    const user = await this.userService.findByEmail(email);
    return user;
  }
}
