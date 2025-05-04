import { Module, forwardRef} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { QueryFilterModule } from '../../../imports-barrel';
import { AuthModule } from 'src/components/Shared/Auth/auth.module';

@Module({
  imports: [QueryFilterModule, forwardRef (()=> AuthModule)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}