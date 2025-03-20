import { setSeederFactory } from 'typeorm-extension';
import { Profile } from '../profile/profile.entity';
import { faker } from '@faker-js/faker';

setSeederFactory(Profile, () => {
  const profile = new Profile();
  profile.firstName = faker.person.firstName();
  profile.lastName = faker.person.lastName();
  profile.gender = faker.person.sex();
  profile.dateOfBirth = faker.date.past();
  profile.bio = faker.person.bio();
  profile.profileImage = faker.image.avatar();
  return profile;
});
