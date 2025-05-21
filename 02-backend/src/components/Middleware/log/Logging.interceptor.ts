import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Inject,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { LoggerService } from '@nestjs/common';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    const controller = context.getClass().name;
    const handler = context.getHandler().name;

    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - now;
        this.logger.log(
          `${method} ${url} (${controller}.${handler}) => ${duration}ms`,
          'HTTP'
        );
      }),
    );
  }
}