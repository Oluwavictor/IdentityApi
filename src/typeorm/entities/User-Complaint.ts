import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User';


@Entity()
export class UserComplaint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToOne(() => User, user => user.complaint)
  @JoinColumn()
  user: User;
}