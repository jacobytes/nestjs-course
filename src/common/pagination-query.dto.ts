import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  limit = 25;

  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  offset: number;
}
