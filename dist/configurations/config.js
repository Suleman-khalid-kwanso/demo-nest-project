"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const typeorm_1 = require("typeorm");
exports.dbConfig = {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await typeorm_1.createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'demo',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
        migrations: ['src/migration/**/*.ts'],
        cli: {
            entitiesDir: 'src/entity',
            migrationsDir: 'src/migration',
            subscribersDir: 'src/subscriber',
        },
    }),
};
//# sourceMappingURL=config.js.map