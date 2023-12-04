import { IsNotEmpty, IsString } from 'class-validator';

export class AdminDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}