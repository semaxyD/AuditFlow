import { Injectable, UnauthorizedException,Logger,LoggerService,Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { QueryFilterService } from '../../../imports-barrel';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private queryfilter: QueryFilterService,
    configService: ConfigService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || '', 
    });

    const secret = configService.get<string>('JWT_SECRET');
    if (!secret) {
      this.logger.error('JWT_SECRET no definido en el entorno. Cerrando servidor...');
      process.exit(1);
    }
  }



  async validate(payload: any) {
    const user = await this.queryfilter.filterQuery('validateUserEmail','user-queries', payload.email)

    if (!user) {
      this.logger.warn(`Token válido pero usuario no encontrado: ${payload.email}`);
      throw new UnauthorizedException('Token válido, pero usuario no encontrado en la base de datos');
    }
    this.logger.log(`Token validado para usuario: ${user.email} (ID: ${user.id})`);
    return {
      id:user.id,
      email: user.email,
      role: user.role,
      name: user.name
    };
  }
}
