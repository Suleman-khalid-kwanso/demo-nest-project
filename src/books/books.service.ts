import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GlobalService } from '../global/global.service';
import { BookEntity } from './book.entity';
import { CreateBookDTO } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
    private readonly globalService: GlobalService,
  ) {}

  async getBooks(): Promise<CreateBookDTO[]> {
    try {
      return await this.bookRepository.find({ relations: ['user'] });
    } catch (error) {
      throw new HttpException(error, 401);
    }
  }
  async getBook(bookId: number): Promise<CreateBookDTO> {
    try {
      return await this.bookRepository.findOne({
        where: { bookId },
      });
    } catch (error) {
      throw new HttpException('Book does not exist!', 404);
    }
  }

  async addBook(book: CreateBookDTO): Promise<CreateBookDTO> {
    try {
      await this.bookRepository.save(book);
      return book;
    } catch (error) {
      throw new HttpException(error, 400);
    }
  }

  async deleteBook(bookId): Promise<string> {
    try {
      let book = await this.bookRepository.findOne({
        where: { bookId: Number(bookId) },
      });
      if (book) {
        await this.bookRepository.delete(Number(bookId));
        return 'Successfully deleted !';
      }
      return 'Book not found !';
    } catch (error) {
      throw new HttpException(error, 404);
    }
  }

  async updateBookInfo(payload: {
    bookId: number;
    bookInfo: any;
  }): Promise<string> {
    try {
      const book = await this.bookRepository.findOne({
        where: { bookId: payload.bookId },
      });
      if (book) {
        payload.bookInfo.user = payload.bookInfo.user;
        this.bookRepository.update(payload.bookId, payload.bookInfo);
        return 'Successfully updated !';
      }
      return 'Book not Found !';
    } catch (error) {
      console.log(error);
    }
  }

  getGlobal() {
    return this.globalService.globalValue();
  }
}
