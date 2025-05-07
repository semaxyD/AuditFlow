import { Module, Query, forwardRef } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/components/User-management/user/user.module';
import { QueryFilterModule } from 'src/imports-barrel';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: "12h"},
      }),
    }),
    forwardRef(()=> UserModule),
    QueryFilterModule
  ],
  providers: [JwtStrategy],
  exports: [JwtStrategy, JwtModule],
})
export class AuthModule {}
