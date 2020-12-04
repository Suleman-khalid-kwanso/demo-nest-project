import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Photo } from '../photo/photo.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'Companies' })
export class Company {
  @PrimaryGeneratedColumn('uuid')
  companyId: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => UserEntity, (user) => user.company)
  user: UserEntity;

  @ManyToMany((type) => Photo, (photo) => photo.company, {
    eager: true,
  })
  @JoinTable()
  photo: Photo[];
}
