import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import bcrypt from 'bcryptjs';
@Injectable()
export class AuthService {
  constructor(private userSerivce: UserService) {}
  //here email & password comes from login api
  async validateUser(email: string, password: string) {
    console.log(password);
    const user = await this.userSerivce.findOneByEmail(email);
    if (!user) throw new UnauthorizedException();
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      throw new UnauthorizedException('passowrd doesnt match');
    return { id: user.id };
  }
}
