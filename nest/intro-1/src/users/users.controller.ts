import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { ConfigService } from '@nestjs/config';
import { PaginationQueryDto } from 'src/common/pagination/dto/pagination-query.dto';

// http://localhost:3000/user

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  // @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  // @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
  @Get()
  getAllUsers(@Query() userQueryDto: PaginationQueryDto) {
    console.log(process.env.NAME);
    return this.userService.getAllUsers(userQueryDto);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  //createUser(@Body(new ValidationPipe()) user: CreateUserDto) {
  createUser(@Body() user: CreateUserDto) {
    //since user have attached global validation pipe we dont need to specify new ValidationPipe() manually over all controller
    return this.userService.createUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
