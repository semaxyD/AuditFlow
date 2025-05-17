import { Injectable } from '@nestjs/common';
import { QueryExecutorService } from './query-executor.service';

@Injectable()
export class QueryFilterService {
  constructor(private readonly queryExecutorService: QueryExecutorService) {}

  // Lógica para filtrar la consulta según el archivo
  async filterQuery(queryFunction: string, queryCollection: string, ...args: any[]) {

    // Cargar la query correspondiente de acuerdo al archivo
    console.log("coleccion solicitada:"+queryCollection)
    console.log("query solicitada:"+queryFunction)

    const result = await this.queryExecutorService.execute(queryCollection,queryFunction,...args);

    console.log("resultado de la query: ", result)

    return result
  }
}
