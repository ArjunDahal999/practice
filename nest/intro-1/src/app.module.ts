import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';
import { HashtagModule } from './hashtag/hashtag.module';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db.config';
import dbProdConfig from './config/db.prod.config';
import testConfig from './config/test.config';
@Module({
  imports: [
    UsersModule,
    TweetModule,
    ProfileModule,
    HashtagModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [dbConfig, dbProdConfig, testConfig], // if we are trying to acces like test.prod.config.dev.port , we need to load these
    }),
    TypeOrmModule.forRootAsync({
      useFactory:
        process.env.NODE_ENV === 'production' ? dbProdConfig : dbConfig,
    }),
  ],
})
export class AppModule {}
