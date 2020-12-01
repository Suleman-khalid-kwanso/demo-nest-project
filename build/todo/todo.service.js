"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
var common_1 = require("@nestjs/common");
var common_service_1 = require("../common/common.service");
var todo_mock_1 = require("../mocks/todo.mock");
var TodoService = /** @class */ (function () {
    function TodoService(commonService) {
        this.commonService = commonService;
        this.todoList = todo_mock_1.TODO;
    }
    TodoService.prototype.getTodoList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.todoList);
        });
    };
    TodoService.prototype.sharedModule = function () {
        return this.commonService.handleShared();
    };
    TodoService.prototype.handleCreate = function (id) {
        return "Document " + id + " is created successfully !";
    };
    TodoService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [common_service_1.CommonService])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map