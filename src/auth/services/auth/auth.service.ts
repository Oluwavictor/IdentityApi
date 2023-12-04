import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/services/admin/admin.service';
import { RegisterAdminDto } from 'src/dtos/register-admin.dto';
import { Admin } from 'src/typeorm/entities/Admin';

@Injectable()
export class AuthService {
    constructor(
        private readonly adminService: AdminService,
        private readonly jwtService: JwtService,
      ) {}
    
      async validateAdmin(username: string, password: string): Promise<Admin> {
        const admin = await this.adminService.findByUsername(username);
        if (admin && admin.password === password) {
          return admin;
        }
        throw new UnauthorizedException();
      }
    
      async registerAdmin(registerAdminDto: RegisterAdminDto): Promise<Admin> {
        return this.adminService.create(registerAdminDto);
      }
    
      async login(admin: Admin): Promise<{ accessToken: string }> {
        const payload = { username: admin.username, sub: admin.id };
        return {
          accessToken: this.jwtService.sign(payload),
        };
      }
}
