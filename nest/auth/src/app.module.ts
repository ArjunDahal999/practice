import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import devDbConfig from './config/dev.db.config';
import prodDbConfig from './config/prod.db.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [devDbConfig],
    }),
    AuthModule,
    // for type orm config
    TypeOrmModule.forRootAsync({
      useFactory:
        process.env.NODE_ENV === 'production' ? prodDbConfig : devDbConfig,
    }),

    // TypeOrmModule.forRootAsync({ // for async connection
    //   useFactory:()=>({
    //   type:'postgres',
    //   entities:[],
    //   synchronize:true,
    //   host:'localhost',
    //   port:5432,
    //   username:'root',
    //   password:'password',
    //   database:"postgres"
    //   })
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
  controllers: [],
  providers: [],
})
export class AppModule {}
