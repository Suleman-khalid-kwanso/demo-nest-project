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
const common_1 = require("@nestjs/common");
const global_service_1 = require("../global/global.service");
const books_mock_1 = require("../mocks/books.mock");
let BooksService = class BooksService {
    constructor(globalService) {
        this.globalService = globalService;
        this.books = books_mock_1.BOOKS;
    }
    getBooks() {
        return new Promise((resolve) => {
            resolve(this.books);
        });
    }
    getBook(bookID) {
        let id = Number(bookID);
        return new Promise((resolve) => {
            const book = this.books.find((book) => book.id === id);
            if (!book) {
                throw new common_1.HttpException('Book does not exist!', 404);
            }
            resolve(book);
        });
    }
    addBook(book) {
        return new Promise((resolve) => {
            this.books.push(book);
            resolve(this.books);
        });
    }
    deleteBook(bookID) {
        let id = Number(bookID);
        return new Promise((resolve) => {
            let index = this.books.findIndex((book) => book.id === id);
            if (index === -1) {
                throw new common_1.HttpException('Book does not exist!', 404);
            }
            this.books.splice(1, index);
            resolve(this.books);
        });
    }
    getGlobal() {
        return this.globalService.globalValue();
    }
};
BooksService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [global_service_1.GlobalService])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map