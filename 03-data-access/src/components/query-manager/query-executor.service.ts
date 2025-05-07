// query-executor.service.ts
import { Injectable } from '@nestjs/common';
import { QueryLoaderService } from './query-loader.service';

@Injectable()
export class QueryExecutorService {
  constructor(private readonly loader: QueryLoaderService) {}

  async execute(collection: string, queryName: string, ...args: any[]) {
    const queries = this.loader.getQueries();

    console.log("🚨 QueryExecutorService recibió queries:", Object.keys(queries));
    console.log("🧠 Buscando colección:", collection);
    
    const module = queries[collection];

    if (!module) {
        throw new Error(`Query collection '${collection}' no encontrada. Collections disponibles: ${Object.keys(queries).join(', ')}`);
    }

    const base = module.getQueries || module;
    const queryFunc = base[queryName];


    if (!queryFunc || typeof queryFunc !== 'function') {
      console.error(`❌ Query '${queryName}' no encontrada en '${collection}'. Funciones disponibles: ${Object.keys(module).join(', ')}`);
    }

    return queryFunc(...args);
  }
}
