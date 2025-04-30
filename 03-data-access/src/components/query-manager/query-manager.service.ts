import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';
import { join } from 'path';

@Injectable()
export class QueryManagerService {
  private queries: { [key: string]: any } = {};

  constructor() {
    this.loadQueries();
  }

  // Función que carga dinámicamente los archivos de las queries
  private loadQueries() {
    // Carpetas donde están las queries
    const paths = [
      join(__dirname, '../system-schema/queries'),         // Queries de system-schema
      join(__dirname, '../system-schema/compound-queries'), // Queries compuestas de system-schema
    ];

    const extension = '.ts'

    // Cargar los archivos de todas las carpetas
    paths.forEach((queriesPath) => {
      const queryFiles = readdirSync(queriesPath);

      queryFiles.forEach((file) => {
        if (file.endsWith(extension) && !file.endsWith(".d.ts")) {  // Filtramos solo archivos .ts
          const queryName = file.replace(extension, '');  // Quitamos la extensión .ts
          const fullPath = `file://${join(queriesPath, file)}`;
          import(fullPath).then((queryModule) => {
            this.queries[queryName] = queryModule;
          }).catch((err) => {
            console.error(`Error loading query module: ${queryName}`, err);
          });
        }
      });
    });
  }

  // Método para obtener una query por su nombre
  getQuery(queryName: string) {
    return this.queries[queryName];
  }
}
