import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../../03-data-access/src/components/system-schema/user.entity'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './components/User-management/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'miguel123',
      database: 'auditflow_dev',
      entities: [Usuario],
      synchronize: true, 
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
