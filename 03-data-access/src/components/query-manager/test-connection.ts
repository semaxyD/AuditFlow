// Util para probar si la conexión está funcionando
import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
