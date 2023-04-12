import { IsString } from 'class-validator';

export class CreateUserRequestDto {
  @IsString()
  userName: string;
}
