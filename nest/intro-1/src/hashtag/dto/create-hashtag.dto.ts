import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHastTagDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
