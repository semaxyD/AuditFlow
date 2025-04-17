// src/components/user-management/user/user.controller.ts
import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './login.dto';
import { JwtAuthGuard } from '../../Shared/Auth/jwt-auth.guard'; // Importar el guardia JWT


@Controller('user') // Ruta base: http://localhost:3001/user
export class UserController {
  constructor(private readonly userService: UserService) {}



  @Post('create') // Ruta para crear un nuevo usuario
  async crearUsuario(@Body() body: any) {
    return this.userService.crearUsuario(body);
  }

  // Endpoints Hu005
  @Post('login') // Ruta para el login de validacion(no de autenticacion)
  async login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto);
  }

  //endpoint temporal para probar la proteccion de endpoints(mientras se implementan otros endpoints que si sena protegidos)
  @UseGuards(JwtAuthGuard) // Aplicar el guardia para esta ruta de prueba
  @Get('protected')
  async getProtectedData() {
    return { message: 'Acceso concedido' };
  }
}
