import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BookEntity } from '../books/book.entity';
import { Photo } from '../photo/photo.entity';

@Entity({ name: 'Users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ length: 250 })
  firstName: string;

  @Column({ length: 250 })
  lastName: string;

  @Column('text')
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToOne(() => Photo, (photo) => photo.user, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  public photo: Photo;

  @OneToMany(() => BookEntity, (book) => book.user)
  books: BookEntity[];
}
