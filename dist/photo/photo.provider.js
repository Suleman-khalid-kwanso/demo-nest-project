"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoProviders = void 0;
const photo_entity_1 = require("./photo.entity");
exports.photoProviders = [
    {
        provide: 'PHOTO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(photo_entity_1.Photo),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=photo.provider.js.map