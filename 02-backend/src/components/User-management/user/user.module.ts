import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '@data-access/src/prismaconfig/prisma.service';
import { DatabaseModule } from '@data-access/src/database.module'; 

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}