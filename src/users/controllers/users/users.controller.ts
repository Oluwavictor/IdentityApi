import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateComplaintDto } from 'src/dtos/create-complaint.dto';
import { RegisterUserDto } from 'src/dtos/register-user.dto';
import { User } from 'src/typeorm/entities/User';
import { UserComplaint } from 'src/typeorm/entities/User-Complaint';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  registerUser(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    return this.userService.create(registerUserDto);
  }

  @Post(':id/complaint')
  @UsePipes(new ValidationPipe())
  createComplaint(@Param('id') userId: number, @Body() createComplaintDto: CreateComplaintDto): Promise<UserComplaint> {
    return this.userService.createComplaint(userId, createComplaintDto);
  }

  @Get(':id')
  getUserWithComplaints(@Param('id') userId: number): Promise<User | undefined> {
    return this.userService.getUserWithComplaints(userId);
  }
}
