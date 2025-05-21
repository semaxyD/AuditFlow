import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as path from 'path';
import * as fs from 'fs';

// Crear directorio si no existe
const logsDir = path.resolve(process.cwd(), 'src/components/Middleware/log/LogsFiles');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.colorize(),
            winston.format.printf(({ context, level, timestamp, message }) => {
              return `[${timestamp}] ${level} ${context ? `[${context}]` : ''} ${message}`;
            }),
          ),
        }),
        new winston.transports.File({
          filename: path.join(logsDir, 'AuditFlow.log'),
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.printf(({ context, level, timestamp, message }) => {
              return `[${timestamp}] ${level.toUpperCase()} ${context ? `[${context}]` : ''} ${message}`;
            }),
          ),
        }),
      ],
    }),
  ],
  exports: [WinstonModule],
})
export class LoggerModule {}
