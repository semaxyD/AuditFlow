import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { QueryFilterService } from '../../../imports-barrel';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private queryfilter: QueryFilterService,
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || '', 
    });

    const secret = configService.get<string>('JWT_SECRET');
    if (!secret) {
      console.error('JWT_SECRET no definido. Apagando servidor...');
      process.exit(1);
    }
  }



  async validate(payload: any) {
    const user = await this.queryfilter.filterQuery('validateUserEmail','user-queries', payload.email)

    if (!user) {
      throw new UnauthorizedException('Token válido, pero usuario no encontrado en la base de datos');
    }
    return {
      id:user.id,
      email: user.email,
      role: user.role,
      name: user.name
    };
  }
}
