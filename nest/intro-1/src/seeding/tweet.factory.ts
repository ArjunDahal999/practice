import { setSeederFactory } from 'typeorm-extension';
import { Tweet } from '../tweet/tweet.entity';
import { faker } from '@faker-js/faker';

setSeederFactory(Tweet, () => {
  const tweet = new Tweet();
  tweet.text = faker.lorem.sentence();
  tweet.image = faker.image.url();
  return tweet;
});
