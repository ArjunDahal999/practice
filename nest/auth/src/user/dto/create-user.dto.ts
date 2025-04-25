import { IsEmail, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  avatar: string;
}


// create dummy user data

export const dummyUser: CreateUserDto = {
    "firstName": 'John',
    "lastName": 'Doe',
    "email": 'john.doe@example.com',
    "password": 'password123',
    "avatar": 'https://example.com/avatar.jpg'
};