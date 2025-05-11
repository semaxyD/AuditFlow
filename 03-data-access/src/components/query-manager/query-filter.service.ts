import { Injectable } from '@nestjs/common';
import { QueryManagerService } from './query-manager.service';

@Injectable()
export class QueryFilterService {
  constructor(private readonly queryManagerService: QueryManagerService) {}

  // Lógica para filtrar la consulta según el tipo
  async filterQuery(queryType: string, queryName: string, ...args: any[]) {
    // Cargar la query correspondiente de acuerdo al tipo
    const query = this.queryManagerService.getQuery(queryName);

    if (!query) {
      throw new Error(`Query not found: ${queryName}`);
    }

    const queryFunc = query[queryType];
    if (typeof queryFunc !== 'function'){
      throw new Error(`Query function not found for type: ${queryType}`);
    }

    return queryFunc(...args);  // Ejecuta el tipo de consulta que necesites (por ejemplo, 'create', 'read', etc.)
  }
}
