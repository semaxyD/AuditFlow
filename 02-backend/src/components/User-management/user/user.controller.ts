// src/components/user-management/user/user.controller.ts
import { Body, Controller, Post, UseGuards, Get,Req, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './login.dto';
import { JwtAuthGuard } from '../../Middleware/Auth/jwt-auth.guard'; // Importar el guardia JWT
import { Roles } from '../../Middleware/decorators/roles.decorator';
import { RolesGuard } from '../../Middleware/Auth/roles.guard';
import { Param } from '@nestjs/common';

@Controller('user') // Ruta base: http://localhost:3001/user
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('companiesList') //Ruta para conseguir los ID's de las compañias disponibles
  async CompaniesList(){
    return this.userService.CompaniesList();
  }


  @Post('create') // Ruta para crear un nuevo usuario
  async crearUsuario(@Body() body: any) {
    return this.userService.crearUsuario(body);
  }


  // Endpoints Hu005
  @Post('login') // Ruta para el login de validacion
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
  async obtenerUsuario(@Param('id',ParseIntPipe) id: number) {
  //  Solo accesible si el token es válido y el rol es ADMIN
  return this.userService.obtenerUsuarioPorId(id); 
}

}
