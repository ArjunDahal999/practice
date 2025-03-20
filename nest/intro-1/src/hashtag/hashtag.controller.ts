import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateHastTagDto } from './dto/create-hashtag.dto';
import { HashtagService } from './hashtag.service';

@Controller('hashtag')
export class HashtagController {
  constructor(private readonly hashtagService: HashtagService) {}
  @Post()
  createHashtag(@Body() hashtag: CreateHastTagDto) {
    return this.hashtagService.createHashtag(hashtag);
  }

  @Get()
  getAllHashtag() {
    return this.hashtagService.getAllHashtag();
  }

  @Delete(':id')
  deleteHashtag(@Param('id', ParseIntPipe) id: number) {
    return this.hashtagService.deleteHashtag(id);
  }
  @Delete('soft-delete/:id')
  softdeleteHashtag(@Param('id', ParseIntPipe) id: number) {
    return this.hashtagService.softDeleteHashtag(id);
  }
}
