"use strict";
exports.__esModule = true;
// src/data-source.ts
var typeorm_1 = require("typeorm");
exports["default"] = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'test',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    migrationsRun: true,
    synchronize: false
});
