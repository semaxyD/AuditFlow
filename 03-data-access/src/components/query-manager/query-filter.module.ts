import { Module } from '@nestjs/common';
import { QueryFilterService } from './query-filter.service';
import { QueryLoaderService } from './query-loader.service';
import { QueryExecutorService } from './query-executor.service';

@Module({
    providers: [QueryFilterService,QueryLoaderService,QueryExecutorService],
    exports: [QueryFilterService,QueryLoaderService,QueryExecutorService],
})
export class QueryFilterModule {}