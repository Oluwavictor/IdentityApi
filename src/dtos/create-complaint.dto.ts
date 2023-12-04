import { IsNotEmpty } from 'class-validator';

export class CreateComplaintDto {
  @IsNotEmpty()
  description: string;
}