import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Lookups } from './lookups.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  image: string;

  @Column({ unique: true })
  firstName: string;

  @Column({ unique: true })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  guadianName: string;

  @Column({ unique: true })
  phoneNumber: number;

  @Column()
  password: string;

  @ManyToOne(() => Lookups, (lookups) => lookups.id)
  @JoinColumn({ name: 'role' })
  role: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
