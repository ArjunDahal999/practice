import { Tweet } from '../tweet/tweet.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'hashtag' })
export class Hashtag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  name: string;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToMany(() => Tweet, (tweet) => tweet.hashtags, { onDelete: 'CASCADE' })
  tweets: Tweet[];
}
