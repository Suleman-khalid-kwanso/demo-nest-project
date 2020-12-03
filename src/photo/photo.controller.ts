import { Body, Controller, Get, Post } from '@nestjs/common';
import { PhotoInputDto } from './dto/photo.input.dto';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) {}

  @Post()
  addPhoto(@Body() photoInput: PhotoInputDto): Promise<PhotoInputDto> {
    return this.photoService.createPhoto(photoInput);
  }
  @Get()
  fetchPhotos(): Promise<any> {
    return this.photoService.getPhotos();
  }
}
