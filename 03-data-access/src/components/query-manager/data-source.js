"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../system-schema/user.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'miguel123',
    database: 'auditflow_dev',
    synchronize: true,
    logging: true,
    entities: [user_entity_1.Usuario],
});
//# sourceMappingURL=data-source.js.map