import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet-dto';
import { PaginationQueryDto } from 'src/common/pagination/dto/pagination-query.dto';
import { GetTweetQueryDto } from './dto/get-tweet-query.dto';

@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Get()
  getAllTweet(@Query() getTweetQueryDto: GetTweetQueryDto) {
    console.log(getTweetQueryDto);
    return this.tweetService.getAllTweets(getTweetQueryDto);
  }

  @Get(':id')
  getTweetByUserId(@Param('id', ParseIntPipe) id: number) {
    return this.tweetService.getTweetById(id);
  }

  @Post()
  createTweet(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetService.createTweets(createTweetDto);
  }

  @Patch(':id')
  updateTweet(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTweetDto: UpdateTweetDto,
  ) {
    return this.tweetService.updateTweets(id, updateTweetDto);
  }

  @Delete(':id')
  deleteTweet(@Param('id', ParseIntPipe) id: number) {
    return this.tweetService.deleteTweet(id);
  }
}
