// admin.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterAdminDto } from 'src/dtos/register-admin.dto';
import { Admin } from 'src/typeorm/entities/Admin';
import { Repository } from 'typeorm';


@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  async create(registerAdminDto: RegisterAdminDto): Promise<Admin> {
    const admin = this.adminRepository.create(registerAdminDto);
    return this.adminRepository.save(admin);
  }

  async findByUsername(username: string): Promise<Admin> {
    return this.adminRepository.findOne({ where: { username } });
  }
}
