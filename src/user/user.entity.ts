import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// { name: 'Users' }

@Entity()
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

  // @CreateDateColumn({ type: 'timestamp' })
  // createdAt: Date;

  // @UpdateDateColumn({ type: 'timestamp' })
  // updatedAt: Date;
}
