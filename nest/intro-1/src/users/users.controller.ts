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
import { PaginationDto } from './dtos/pagination-dto';

// http://localhost:3000/user

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  // @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number,
  @Get()
  getAllUsers(
    @Query()
    paginationDto: PaginationDto,
  ) {
    console.log(typeof paginationDto);
    return this.userService.getAllUsers(paginationDto);
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
