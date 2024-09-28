import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LookupDetails } from './lookupDetails.entity';

@Entity('lookups')
export class Lookups {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => LookupDetails, (lookupDetails) => lookupDetails.id)
  @JoinColumn({ name: 'lookupdetailsId' })
  lookupDetails: LookupDetails;

  @Column()
  lookup: string;

  @Column()
  value: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
