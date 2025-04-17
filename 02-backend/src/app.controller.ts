import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() 
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Ruta GET en la raíz ('/')
  getHello(): string {
    return this.appService.getHello(); // Devuelve un mensaje desde el servicio
  }

  @Get('/ping') // Ruta GET en '/ping'
  ping() {
    // Esto sirve para probar que el backend está corriendo bien
    return { message: 'Backend está funcionando correctamente' };
  }
}
