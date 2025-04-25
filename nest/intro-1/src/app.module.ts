import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';
import { HashtagModule } from './hashtag/hashtag.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PaginationModule } from './common/pagination/pagination.module';
import dbConfig from './config/db.config';
import dbProdConfig from './config/db.prod.config';
import testConfig from './config/test.config';
import appConfig from './config/app.config';
import envValidator from './config/env.validation';
const env = process.env.NODE_ENV;
const envpath = !env ? '.env' : `.env.${env.trim()}`;

@Module({
  imports: [
    UsersModule,
    TweetModule,
    ProfileModule,
    HashtagModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: !env ? '.env' : `.env.${env.trim()}`,
      validationSchema: envValidator,
      //  load: [appConfig, dbConfig], // if we are trying to acces like test.prod.config.dev.port , we need to load these
    }),
    // one method
    // TypeOrmModule.forRootAsync({
    //   useFactory:
    //     process.env.NODE_ENV === 'production' ? dbProdConfig : dbConfig,
    // }),

    // --- 2nd method
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => dbConfig(),
    }),
    PaginationModule,

    // --3rd method
    // TypeOrmModule.forRootAsync({
    //   // for async connection
    //   useFactory: () => ({
    //     type: 'postgres',
    //     entities: [],
    //     synchronize: true,
    //     host: 'localhost',
    //     port: 5432,
    //     username: 'root',
    //     password: 'password',
    //     database: 'postgres',
    //   }),
    // }),

    // TypeOrmModule.forRoot({  // this is sync connection
    //   type:'postgres',
    //   entities:[],
    //   synchronize:true,
    //   host:'localhost',
    //   port:5432,
    //   username:'root',
    //   password:'password',
    //   database:"postgres"
    // })
  ],
})
export class AppModule {}
