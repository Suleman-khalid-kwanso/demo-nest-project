import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoInputDto } from './dto/photo.input.dto';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo) private photoRepository: Repository<Photo>,
  ) {}

  async getPhotos(): Promise<Photo[]> {
    try {
      return await this.photoRepository.find();
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }

  async createPhoto(photoInput: PhotoInputDto): Promise<PhotoInputDto> {
    try {
      photoInput.views = Number(photoInput.views);
      await this.photoRepository.save(photoInput);
      return photoInput;
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_ACCEPTABLE);
    }
  }
}
