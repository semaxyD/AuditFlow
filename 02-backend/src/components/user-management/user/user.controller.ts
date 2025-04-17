import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('usuarios')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async crearUsuario(@Body() body: any) {
    return this.userService.crearUsuario(body);
  }
}