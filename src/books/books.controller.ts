import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getBooks(): Promise<CreateBookDTO[]> {
    return this.booksService.getBooks();
  }

  @Get(':bookID')
  getBook(@Param('bookID') bookID: string): Promise<CreateBookDTO> {
    return this.booksService.getBook(Number(bookID));
  }

  @Post()
  addBook(@Body() createBookDTO: CreateBookDTO): Promise<CreateBookDTO> {
    return this.booksService.addBook(createBookDTO);
  }

  @Delete()
  async deleteBook(@Query() query) {
    return await this.booksService.deleteBook(query.bookID);
  }

  @Get('glob/me')
  globalAccess() {
    return this.booksService.getGlobal();
  }
}
