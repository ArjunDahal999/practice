import { IsEmail, IsString } from 'class-validator';
import { IsNull } from 'typeorm';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
