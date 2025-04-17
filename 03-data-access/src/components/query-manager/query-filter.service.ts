import { Injectable } from '@nestjs/common';
import { QueryManagerService } from './query-manager.service';

@Injectable()
export class QueryFilterService {
  constructor(private readonly queryManagerService: QueryManagerService) {}

  // Lógica para filtrar la consulta según el tipo
  async filterQuery(queryType: string, queryName: string) {
    // Cargar la query correspondiente de acuerdo al tipo
    const query = this.queryManagerService.getQuery(queryName);

    if (!query) {
      throw new Error(`Query not found: ${queryName}`);
    }

    // Aquí se puede realizar alguna lógica adicional si es necesario,
    // como validar o modificar la query antes de devolverla
    return query[queryType];  // Ejecuta el tipo de consulta que necesites (por ejemplo, 'create', 'read', etc.)
  }
}
