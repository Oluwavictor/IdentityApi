import { IsNotEmpty, IsString } from 'class-validator';

export class UserComplaintDto {
  @IsNotEmpty()
  @IsString()
  complaintText: string;
}