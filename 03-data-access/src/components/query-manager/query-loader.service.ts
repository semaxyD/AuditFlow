// query-loader.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { readdirSync, existsSync } from 'fs';
import { join } from 'path';
import { createRequire } from 'module';

@Injectable()
export class QueryLoaderService implements OnModuleInit {
  private queries: Record<string, any> = {};

  async onModuleInit() {
    console.log('🟢 QueryLoaderService inicializado');
    await this.loadQueries();
    console.log('✅ Todas las queries fueron cargadas por QueryLoaderService');
  }

  private async loadQueries() {

    const tsPaths = [
      join(__dirname, '../system-schema/queries'),
      join(__dirname, '../system-schema/compound-queries'),
    ];

    const jsPaths = [
      join(__dirname, '../../../dist/components/system-schema/queries'),
      join(__dirname, '../../../dist/components/system-schema/compound-queries'),
    ];

    const tsExists = tsPaths.every((p) => existsSync(p));
    const queriesPath = tsExists ? tsPaths : jsPaths;

    const require = createRequire(import.meta.url);

    const importPromises: Promise<void>[] = [];

    for (const dir of queriesPath) {

      if (!existsSync(dir)){
        console.warn(`⚠️ Directorio no existe: ${dir}`);
        continue;
      }
      console.log(`📁 Explorando: ${dir}`);


      for (const file of readdirSync(dir)) {
        console.log(`🙄 Archivo '${file}' leyendo`)
        console.log(`extension con la que se cargo el archivo '${file}' es '${file.endsWith('.js')}'`)


        if (file.endsWith('.js') && !file.endsWith('.d.ts') && !file.endsWith('.d.ts.map')) {
          console.log(`tratado del archivo '${file}' dentro del if,con extension .js`)

          const name = file.replace('.js', '');
          const fullPath = join(dir, file);


          try{
            console.log(`📦 Cargando archivo de queries '${name}' desde ${fullPath}`);
            const module = require(fullPath);
            this.queries[name] = module;
            console.log(`✅ Query '${name}' cargada correctamente.`);
          }catch(err){
            console.error(`❌ Error cargando ${name}:`, err);
          }
        }
      }
    }
    console.log("🗂️ Queries cargadas:");
    console.table(Object.keys(this.queries));
  }

  getQueries() {
    return this.queries;
  }
}
