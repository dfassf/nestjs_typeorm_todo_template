import { IsOptional, IsString } from 'class-validator';

export class UpdateUserRequestDto {
  @IsString()
  @IsOptional()
  userName?: string;
}
