import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from './config/jwt.config';
import { JwtStrategy } from './strategies/jwt.strategy';
import refreshTokenConfig from './config/refresh-token.config';
import { EmailService } from 'src/email/email.service';
@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    LocalStrategy,
    JwtStrategy,
    EmailService,
  ],
  imports: [
    TypeOrmModule.forFeature([User]),
    ConfigModule.forFeature(jwtConfig),
    ConfigModule.forFeature(refreshTokenConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    // JwtModule.register({
    //   secret: 'ABCD',
    //   signOptions: {
    //     expiresIn: '1d',
    //   },
    // }),
  ],
})
export class AuthModule {}
