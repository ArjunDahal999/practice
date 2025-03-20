import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Hashtag } from './hashtag.entity';
import { CreateHastTagDto } from './dto/create-hashtag.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HashtagService {
  constructor(
    @InjectRepository(Hashtag)
    private readonly hashtagRepository: Repository<Hashtag>,
  ) {}

  async createHashtag(createHashtagDto: CreateHastTagDto) {
    let hashtag = this.hashtagRepository.create(createHashtagDto);
    hashtag = await this.hashtagRepository.save(hashtag);
    return hashtag;
  }

  async getAllHashtag() {
    return this.hashtagRepository.find({});
  }

  async findHashtag(hashtags: number[]) {
    return await this.hashtagRepository.find({
      where: {
        id: In(hashtags),
      },
    });
  }
  async deleteHashtag(id: number) {
    await this.hashtagRepository.delete({ id });
    return { deleted: true, id };
  }
  async softDeleteHashtag(id: number) {
    //here soft deleteing wont delete the  row  from the many_to_many table
    await this.hashtagRepository.softDelete({ id });
    return { deleted: true, id };
  }
}
