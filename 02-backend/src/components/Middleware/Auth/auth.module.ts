import { Module, Query, forwardRef } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/components/User-management/user/user.module';
import { QueryFilterModule } from 'src/imports-barrel';
import { RolesGuard } from './roles.guard';
import { AccessAttemptService } from './access-attempt.service';

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
  providers: [JwtStrategy, RolesGuard, AccessAttemptService],
  exports: [JwtStrategy, JwtModule, RolesGuard, AccessAttemptService],
})
export class AuthModule {}
