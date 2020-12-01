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
exports.BooksService = void 0;
var common_1 = require("@nestjs/common");
var global_service_1 = require("../global/global.service");
var books_mock_1 = require("../mocks/books.mock");
var BooksService = /** @class */ (function () {
    function BooksService(globalService) {
        this.globalService = globalService;
        this.books = books_mock_1.BOOKS;
    }
    BooksService.prototype.getBooks = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.books);
        });
    };
    BooksService.prototype.getBook = function (bookID) {
        var _this = this;
        var id = Number(bookID);
        return new Promise(function (resolve) {
            var book = _this.books.find(function (book) { return book.id === id; });
            if (!book) {
                throw new common_1.HttpException('Book does not exist!', 404);
            }
            resolve(book);
        });
    };
    BooksService.prototype.addBook = function (book) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.books.push(book);
            resolve(_this.books);
        });
    };
    BooksService.prototype.deleteBook = function (bookID) {
        var _this = this;
        var id = Number(bookID);
        return new Promise(function (resolve) {
            var index = _this.books.findIndex(function (book) { return book.id === id; });
            if (index === -1) {
                throw new common_1.HttpException('Book does not exist!', 404);
            }
            _this.books.splice(1, index);
            resolve(_this.books);
        });
    };
    BooksService.prototype.getGlobal = function () {
        return this.globalService.globalValue();
    };
    BooksService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [global_service_1.GlobalService])
    ], BooksService);
    return BooksService;
}());
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map