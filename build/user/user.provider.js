"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProvider = void 0;
var user_entity_1 = require("./user.entity");
exports.userProvider = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: function (connection) {
            return connection.getRepository(user_entity_1.UserEntity);
        },
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=user.provider.js.map