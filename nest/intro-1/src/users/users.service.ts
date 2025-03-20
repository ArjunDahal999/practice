import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from 'src/profile/profile.entity';
import { PaginationDto } from './dtos/pagination-dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private configService: ConfigService, // injectinh the servie to access the config
  ) {}
  async getAllUsers(paginationDto: PaginationDto) {
    const [items, total] = await this.userRepository.findAndCount({
      relations: {
        profile: true,
        tweets: true,
      },
      skip: (paginationDto.page! - 1) * paginationDto?.limit!,
      take: paginationDto.limit,
      order: {
        id: 'ASC',
      },
    });
    return {
      items,
      meta: {
        total,
        page: paginationDto.page,
        limit: paginationDto.limit,
        totalPages: Math.ceil(total / paginationDto.limit!),
      },
    };
  }

  getUserById(id: number) {
    return this.userRepository.findOneBy({
      id,
    });
  }

  public async createUser(userDto: CreateUserDto) {
    // create a profile & save
    userDto.profile = userDto.profile ?? {};
    //@ts-ignore
    let user = this.userRepository.create(userDto);

    return await this.userRepository.save(user);
  }

  public async deleteUser(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    const res = await this.userRepository.delete(id);

    return res;
  }
}
