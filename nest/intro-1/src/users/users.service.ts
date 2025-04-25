import {
  BadRequestException,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from 'src/profile/profile.entity';
import { ConfigService, ConfigType } from '@nestjs/config';
import userConfig from './config/user.config';
import { UserAlreadyExistsException } from 'src/custom-exception/user-already-exist.exception';
import { PaginationProvider } from 'src/common/pagination/pagination.provider';
import { PaginationQueryDto } from 'src/common/pagination/dto/pagination-query.dto';
import { IPaginated } from 'src/common/pagination/paginater.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @Inject(userConfig.KEY)
    private readonly userConfiguration: ConfigType<typeof userConfig>, // injecting the servie to access the config
    private paginationProvider: PaginationProvider,
  ) {}
  async getAllUsers(
    userQueryDto: PaginationQueryDto,
  ): Promise<IPaginated<User>> {
    console.log(this.userConfiguration.secret);
    // const enviroment = this.configService.get('DB_PASSWORD');
    // console.log(enviroment);
    console.log(userQueryDto);
    try {
      const user = await this.paginationProvider.paginateQuery(
        userQueryDto,
        this.userRepository,
        { profile: true },
      );
      return user;
    } catch (error) {
      console.log(error);
      throw new RequestTimeoutException('An error has occured');
    }
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOneBy({
      id,
    });
    console.log(user);
    console.log(id);

    if (!user)
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
          table: 'User',
        },
        HttpStatus.NOT_FOUND,
        {
          // here we include implement some logger / information that is not sent to the client but helpful to the developer
        },
      );
    return user;
  }

  public async createUser(userDto: CreateUserDto) {
    try {
      // create a profile & save
      userDto.profile = userDto.profile ?? {};
      let userAlreadyExist = await this.userRepository.findOne({
        where: [{ email: userDto.email }],
      });
      if (userAlreadyExist)
        throw new UserAlreadyExistsException('Email', userDto.email);

      userAlreadyExist = await this.userRepository.findOne({
        where: [{ userName: userDto.userName }],
      });
      if (userAlreadyExist)
        throw new UserAlreadyExistsException('Name', userDto.userName);
      //@ts-ignore
      let user = this.userRepository.create(userDto);

      return await this.userRepository.save(user);
    } catch (error) {
      if (error.code === 'ECONNEREFUSED') {
        throw new RequestTimeoutException('error');
      }
      // no need since
      // if (error.code === '23505') {
      //   throw new BadRequestException('Duplicated user name');
      // }
      throw error;
    }
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
