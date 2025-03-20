import { Hashtag } from '../hashtag/hashtag.entity';
import { User } from '../users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tweets' })
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    nullable: false,
  })
  text: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  image?: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.tweets)
  //@JoinColumn() no need to join coulmn because in this case , forgein will be automatically generated in tweet table since we have specified One to Many relation form user to tweet
  user: User;

  @ManyToMany(() => Hashtag, (hashtag) => hashtag.tweets) // here the tweet is th owning table(since we have used join table) , so when we delete any tweet then that hastag will be automatically deleted in the junction table(tweet_hashtag_hastag)
  @JoinTable() // here since we have a many to many reationship , we need to create a seperate table for holding the tweet_id and hashtag_id
  hashtags: Hashtag[];
}
