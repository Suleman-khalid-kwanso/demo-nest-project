import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { Company } from '../company/company.entity';
import { UserEntity } from '../user/user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;

  @OneToOne(() => UserEntity, (user: UserEntity) => user.photo)
  public user: UserEntity;

  @ManyToMany((type) => Company, (company) => company.photo)
  company: Company[];
}
