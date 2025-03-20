import { setSeederFactory } from 'typeorm-extension';
import { User } from '../users/user.entity';
import { faker } from '@faker-js/faker';

setSeederFactory(User, () => {
  const user = new User();
  user.email = faker.internet.email();
  user.userName = faker.internet.userName();
  user.password = faker.internet.password();
  return user;
});
