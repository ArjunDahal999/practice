import { Body, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/users/users.service';
import { Tweet } from './tweet.entity';
import { Repository } from 'typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { HashtagService } from 'src/hashtag/hashtag.service';
import { UpdateTweetDto } from './dto/update-tweet-dto';

@Injectable()
export class TweetService {
  constructor(
    private hashtagService: HashtagService,
    private userService: UserService,
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}
  async getAllTweets() {
    return this.tweetRepository.find({
      relations: {
        hashtags: true,
      },
    });
  }

  async getTweetById(id: number) {
    return this.tweetRepository.findOne({
      where: {
        id,
      },
      relations: {
        hashtags: true,
        user: true,
      },
    });
  }

  async getTweetByUser(id: number) {
    return this.tweetRepository.find({
      where: {
        user: {
          id,
        },
      },
      relations: {
        user: true,
        hashtags: true,
      },
    });
  }
  async createTweets(createTweetDto: CreateTweetDto) {
    const user = await this.userService.getUserById(createTweetDto.userId);
    if (!user) return 'user not found';

    const hashTags = await this.hashtagService.findHashtag(
      createTweetDto.hashTags!,
    );

    let tweet = this.tweetRepository.create({
      user,
      ...createTweetDto,
      hashtags: hashTags,
    });

    tweet = await this.tweetRepository.save(tweet);
    return tweet;
  }

  async updateTweets(id: number, updateTweetDto: UpdateTweetDto) {
    const hashtag = await this.hashtagService.findHashtag(
      updateTweetDto.hashTags!,
    );

    const tweet = await this.getTweetById(id);

    if (!tweet) return;

    tweet.text = updateTweetDto.text ?? tweet.text;
    tweet.image = updateTweetDto.image ?? tweet.image;
    tweet.hashtags = hashtag;

    return this.tweetRepository.save(tweet);
  }

  async deleteTweet(id: number) {
    return await this.tweetRepository.delete({
      id: id,
    });
  }
}
