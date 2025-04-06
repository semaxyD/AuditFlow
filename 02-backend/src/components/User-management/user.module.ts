import { Module } from '@nestjs/common';
import { UserService } from './user-service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../../../../03-data-access/src/components/system-schema/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UserController],
    providers: [UserService],
  })
  export class UserModule {}