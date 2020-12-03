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
    private readonly photoRepository: Repository<BookEntity>,
    private readonly globalService: GlobalService,
  ) {}

  getBooks(): Promise<CreateBookDTO[]> {
    try {
      return this.photoRepository.find();
    } catch (error) {
      throw new HttpException(error, 401);
    }
  }
  async getBook(bookId: number): Promise<CreateBookDTO> {
    try {
      return await this.photoRepository.findOne({
        where: { bookId },
      });
    } catch (error) {
      throw new HttpException('Book does not exist!', 404);
    }
  }

  async addBook(book: CreateBookDTO): Promise<CreateBookDTO> {
    try {
      await this.photoRepository.save(book);
      return book;
    } catch (error) {
      throw new HttpException(error, 400);
    }
  }

  async deleteBook(bookId): Promise<string> {
    try {
      let book = await this.photoRepository.findOne({
        where: { bookId: Number(bookId) },
      });
      if (book) {
        await this.photoRepository.delete(Number(bookId));
        return 'Successfully deleted !';
      }
      return 'Book not found !';
    } catch (error) {
      throw new HttpException(error, 404);
    }
  }

  getGlobal() {
    return this.globalService.globalValue();
  }
}
