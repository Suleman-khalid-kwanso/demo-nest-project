"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const books_module_1 = require("./books/books.module");
const authMiddleware_1 = require("./middlewares/authMiddleware");
const testMiddleware_1 = require("./middlewares/testMiddleware");
const todo_controller_1 = require("./todo/todo.controller");
const todo_module_1 = require("./todo/todo.module");
const common_module_1 = require("./common/common.module");
const global_module_1 = require("./global/global.module");
const user_module_1 = require("./user/user.module");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const config_1 = require("@nestjs/config");
const auth_service_1 = require("./auth/auth.service");
const auth_module_1 = require("./auth/auth.module");
const photo_module_1 = require("./photo/photo.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(authMiddleware_1.authMiddleware, testMiddleware_1.testMiddleware).forRoutes(todo_controller_1.TodoController);
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            books_module_1.BooksModule,
            todo_module_1.TodoModule,
            common_module_1.CommonModule,
            global_module_1.GlobalModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot(),
            photo_module_1.PhotoModule,
        ],
        providers: [app_service_1.AppService, auth_service_1.AuthService],
        controllers: [app_controller_1.AppController],
        exports: [global_module_1.GlobalModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map