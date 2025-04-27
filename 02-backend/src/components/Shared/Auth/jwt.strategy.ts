import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { QueryFilterService } from '@data-access/src/components/query-manager/query-filter.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private queryfilter: QueryFilterService,
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET') || '', 
    });

    if (!configService.get<string>('JWT_SECRET')) {
      throw new Error('JWT_SECRET no está definido en el entorno');
    }
  }

  async validate(payload: any) {
    const user = await this.queryfilter.filterQuery('read','validateUserEmail', payload.email)

    if (!user) {
      throw new Error('Token válido, pero usuario no encontrado en la base de datos');
    }

    return {id:user.id , email: user.email, role: user.role, name: user.name};
  }
}
