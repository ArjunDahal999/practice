import { Profile } from '../profile/profile.entity';
import { Tweet } from '../tweet/tweet.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
    unique: true,
  })
  userName: string;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
  })
  password: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: ['insert'], // automatically created profile when the user is created
  })
  profile?: Profile;

  @OneToMany(() => Tweet, (tweet) => tweet.user)
  tweets?: Tweet[];
}
