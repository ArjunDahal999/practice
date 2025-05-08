import { IntersectionType } from '@nestjs/mapped-types';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTweetDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsOptional()
  @IsInt({ each: true })
  @IsArray()
  hashTags?: number[];
}
