import { IsNotEmpty } from 'class-validator';

export class RegisterAdminDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}