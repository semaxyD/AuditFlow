import { Module } from '@nestjs/common';
import { QueryFilterService } from './query-filter.service';
import { QueryManagerService } from './query-manager.service';

@Module({
    providers: [QueryFilterService,QueryManagerService],
    exports: [QueryFilterService],
})
export class QueryFilterModule {}