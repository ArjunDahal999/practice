import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';

export class CreateUserDto {
  @IsString({ message: 'Name should be a string value' })
  @IsNotEmpty()
  @MinLength(2, { message: 'Name shoule have minimum of 3 characters' })
  @MaxLength(24, { message: 'Name should have maximum of 100 characters' })
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password should have minimum of 8 characters' })
  @MaxLength(100)
  password: string;

  @IsOptional()
  profile?: CreateProfileDto | null;
}
