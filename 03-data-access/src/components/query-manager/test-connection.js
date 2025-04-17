"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
})
    .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});
//# sourceMappingURL=test-connection.js.map