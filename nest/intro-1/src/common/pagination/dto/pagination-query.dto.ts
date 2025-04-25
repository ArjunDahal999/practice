import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  // @Type(() => Number) no need since we have enable the implicit type conversion
  limit?: number = 10;
  @IsOptional()
  @IsPositive()
  // @Type(() => Number)
  page?: number = 1;
}
