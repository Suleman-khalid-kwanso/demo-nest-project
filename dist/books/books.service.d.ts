import { GlobalService } from 'src/global/global.service';
export declare class BooksService {
    private readonly globalService;
    constructor(globalService: GlobalService);
    books: {
        id: number;
        title: string;
        description: string;
        author: string;
    }[];
    getBooks(): Promise<any>;
    getBook(bookID: any): Promise<any>;
    addBook(book: any): Promise<any>;
    deleteBook(bookID: any): Promise<any>;
    getGlobal(): string;
}
