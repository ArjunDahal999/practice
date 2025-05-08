import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
  Delete,
  Param,
  ParseIntPipe,
  SetMetadata,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Role } from 'src/auth/enum/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(process.env.DB_PASSWORD);
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  findOne(@Req() req) {
    return this.userService.findOne(req.user.userId);
  }

  //@SetMetadata("roles",[Role.ADMIN])
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard) // this will be calback to the roles guard
  @Roles(Role.ADMIN, Role.EDITOR) // this will be calback to the jwt auth guard
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return 'User Deleted';
  }
}
