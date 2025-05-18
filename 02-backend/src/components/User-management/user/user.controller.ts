// src/components/user-management/user/user.controller.ts
import { Body, Controller, Post, UseGuards, Get, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './login.dto';
import { CreateCompanyDto } from './create-company.dto';
import { UpdateCompanyDto } from './update-compant.dto';
import { UpdateUserDto } from './update-user.dto';
import { DeleteFrequencyDto } from './delete-frecuency.dto';
import { JwtAuthGuard } from '../../Middleware/Auth/jwt-auth.guard'; // Importar el guardia JWT
import { Roles } from '../../Middleware/decorators/roles.decorator';
import { RolesGuard } from '../../Middleware/Auth/roles.guard';
import { Param } from '@nestjs/common';
import { UpdateFrequencyDto } from './update-frecuency.dto'

@Controller('user') // Ruta base: http://localhost:3001/user
export class UserController {
  constructor(private readonly service: UserService) { }


  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('companiesList') //Ruta para conseguir los ID's de las compañias disponibles
  async CompaniesList() {
    return this.service.CompaniesList();
  }


  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post('create') // Ruta para crear un nuevo usuario
  async crearUsuario(@Body() body: any) {
    return this.service.crearUsuario(body);
  }


  // Endpoints Hu005
  @Post('login') // Ruta para el login de validacion
  async login(@Body() loginDto: LoginDto) {
    return this.service.login(loginDto);
  }


  //endpoint temporal para probar la proteccion de endpoints(mientras se implementan otros endpoints que si sean protegidos)
  @UseGuards(JwtAuthGuard) // Aplicar el guardia para esta ruta de prueba
  @Get('protected')
  async getProtectedData() {
    return { message: 'Acceso concedido' };
  }


  //HU002 y HU017 endpoint protegido para obtener todos los usuarios, solamente accesible por el rol ADMIN
  //Sirve para listar los usuarios y asi seleccionar a quien se va a configurar
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('search')
  async buscarUsuarios() {
    return this.service.buscarUsuarios();
  }


  //endpoinrt que devuelve info completa de un usuario por su ID
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get(':id')
  async obtenerUsuario(@Param('id', ParseIntPipe) id: number) {
    //  Solo accesible si el token es válido y el rol es ADMIN
    return this.service.obtenerUsuarioPorId(id);
  }


  // HU017 - Trae las empresas asociadas a un usuario para armar el formulario de configuración
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get(':id/companies')
  async getCompaniesByUser(@Param('id', ParseIntPipe) id: number) {
    return this.service.getCompaniesByUserId(id);
  }

  // HU017 - Trae las normas donde se aplicara la frecuencia para armar el formulario de configuración
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('config/norms')
  getIdByNorms() {
    return this.service.getIdByNormToConfig();
  }

  //Endpoint HU017 para guardar o actualizar la configuracion hecha con los datos recopilados con los endpoints anteriores
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post('config/frequency')
  async updateAuditFrequency(@Body() updateFrequencyDto: UpdateFrequencyDto) {
    return this.service.updateFrequency(updateFrequencyDto);
  }

  //Endpoint HU017 para eliminar la configuracion hecha con los datos recopilados con los endpoints anteriores
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete('config/delete')
  async deleteAuditFrequency(@Body() deleteFrequencyDto: DeleteFrequencyDto) {
    return this.service.deleteFrequency(deleteFrequencyDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post('create/company') // Ruta para crear una nueva empresa
  async createCompany(@Body() body: CreateCompanyDto) {
    return this.service.createCompany(body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Put('update/company/:companyId') // Ruta para modificar una nueva empresa
  async updateCompany(@Param('companyId', ParseIntPipe) companyId: number, @Body() body: UpdateCompanyDto) {
    return this.service.updateCompany(companyId, body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Delete('delete/company/:companyId') // Ruta para eliminar una nueva empresa
  async deleteCompany(@Param('companyId', ParseIntPipe) companyId: number) {
    return this.service.deleteCompany(companyId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Put('update/:id') // Ruta para modificar un usuario
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
  ) {
    return this.service.updateUser(id, body);
  }




}
