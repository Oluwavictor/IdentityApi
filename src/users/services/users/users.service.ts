import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateComplaintDto } from 'src/dtos/create-complaint.dto';
import { RegisterUserDto } from 'src/dtos/register-user.dto';
import { User } from 'src/typeorm/entities/User';
import { UserComplaint } from 'src/typeorm/entities/User-Complaint';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(UserComplaint)
        private readonly userComplaintRepository: Repository<UserComplaint>,
      ) {}
    
      async create(registerUserDto: RegisterUserDto): Promise<User> {
        const user = this.userRepository.create(registerUserDto);
        return this.userRepository.save(user);
      }
    
      async createComplaint(userId: any, createComplaintDto: CreateComplaintDto): Promise<UserComplaint> {
        const user = await this.userRepository.findOne(userId);
        const complaint = this.userComplaintRepository.create({
          description: createComplaintDto.description,
          user,
        });
        return this.userComplaintRepository.save(complaint);
      }
    
      async getUserWithComplaints(userId: number): Promise<User | undefined> {
        //return this.userRepository.findOne(userId, { relations: ['complaint'] });
        return this.userRepository.findOne({
            where: { id: userId },
            relations: ['complaint'],
          });
    }
}
