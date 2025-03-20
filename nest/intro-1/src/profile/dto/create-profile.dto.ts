import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProfileDto {
  @IsString({ message: 'Name should be a string value' })
  @IsOptional()
  @MinLength(3, { message: 'Name shoule have minimum of 3 characters' })
  @MaxLength(100, { message: 'Name should have maximum of 100 characters' })
  firstName?: string;

  @IsString({ message: 'Name should be a string value' })
  @IsOptional()
  @MinLength(3, { message: 'Name shoule have minimum of 3 characters' })
  @MaxLength(100, { message: 'Name should have maximum of 100 characters' })
  lastName?: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  gender?: string;

  @IsString()
  @IsOptional()
  profileImage?: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsDate()
  @IsOptional()
  dateOfBirth?: Date;
}
