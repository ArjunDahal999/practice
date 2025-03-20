import { User } from '../users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'profile' })
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  firstName?: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  lastName?: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  gender?: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  dateOfBirth?: Date;
  @Column({
    type: 'text',
    nullable: true,
  })
  bio?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  profileImage?: string;

  @OneToOne(() => User, (user) => user.profile, { onDelete: 'CASCADE' }) //  inorder to specifiy that which  column in the user table does it have a link , so  the call back function will receive user  that will
  @JoinColumn() // it will  create a forgin key in a profile table with the userId column
  user: User;
}
