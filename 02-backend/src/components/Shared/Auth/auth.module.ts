import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../../User-management/user/user.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: "12h"},
      }),
    }),
  ],
  providers: [JwtStrategy,UserService],
  exports: [JwtStrategy],
})
export class AuthModule {}
