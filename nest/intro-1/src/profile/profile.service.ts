import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  getAllProfiles(limit: number, page: number) {
    return this.profileRepository.find({
      take: limit,
      skip: (page - 1) * limit,
      relations: {
        user: true,
      },
    });
  }
}
