import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Profile } from 'src/profile/profile.entity';
import { ConfigModule } from '@nestjs/config';
import userConfig from './config/user.config';
import { PaginationModule } from 'src/common/pagination/pagination.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [
    TypeOrmModule.forFeature([User, Profile]),
    ConfigModule.forFeature(userConfig),
    PaginationModule,
  ], // here since we are only making the config available to a user module only , so we are using for feature , this is only know ass partial registration
})
export class UsersModule {}
