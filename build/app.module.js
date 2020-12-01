"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var books_module_1 = require("./books/books.module");
var authMiddleware_1 = require("./middlewares/authMiddleware");
var testMiddleware_1 = require("./middlewares/testMiddleware");
var todo_controller_1 = require("./todo/todo.controller");
var todo_module_1 = require("./todo/todo.module");
var common_module_1 = require("./common/common.module");
var global_module_1 = require("./global/global.module");
var user_module_1 = require("./user/user.module");
var app_service_1 = require("./app.service");
var app_controller_1 = require("./app.controller");
var config_1 = require("@nestjs/config");
var auth_service_1 = require("./auth/auth.service");
var auth_module_1 = require("./auth/auth.module");
var photo_module_1 = require("./photo/photo.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.prototype.configure = function (consumer) {
        consumer.apply(authMiddleware_1.authMiddleware, testMiddleware_1.testMiddleware).forRoutes(todo_controller_1.TodoController);
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
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map