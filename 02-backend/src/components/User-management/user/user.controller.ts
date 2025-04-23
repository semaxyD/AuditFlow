// src/components/user-management/user/user.controller.ts
import { Body, Controller, Post, UseGuards, Get,Req } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './login.dto';
import { JwtAuthGuard } from '../../Shared/Auth/jwt-auth.guard'; // Importar el guardia JWT
import { Roles } from '../../Shared/decorators/roles.decorator';
import { RolesGuard } from '../../Shared/Auth/roles.guard';
import { Param } from '@nestjs/common';

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


  //endpoint temporal para probar la proteccion de endpoints(mientras se implementan otros endpoints que si sean protegidos)
  @UseGuards(JwtAuthGuard) // Aplicar el guardia para esta ruta de prueba
  @Get('protected')
  async getProtectedData() {
    return { message: 'Acceso concedido' };
  }


  //endpoint protegido para obtener todos los usuarios, solamente accesible por el rol ADMIN
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('search')
  async buscarUsuarios() {
    return this.userService.buscarUsuarios();
  }
  

  //endpoinrt que devuelve info completa de un usuario por su ID
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get(':id')
  async obtenerUsuario(@Param('id') id: string) {
  //  Solo accesible si el token es válido y el rol es ADMIN
  return this.userService.obtenerUsuarioPorId(+id); 
}

}
