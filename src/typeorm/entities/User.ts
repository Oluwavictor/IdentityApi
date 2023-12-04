import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { UserComplaint } from './User-Complaint'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => UserComplaint, complaint => complaint.user)
  @JoinColumn()
  complaint: UserComplaint;
}