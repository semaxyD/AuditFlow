//Este archivo sirve solo para verificar que el backend responde correctamente

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Mundo';
  }
}

