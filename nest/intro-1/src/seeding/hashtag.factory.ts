import { setSeederFactory } from 'typeorm-extension';
import { Hashtag } from '../hashtag/hashtag.entity';
import { faker } from '@faker-js/faker';

setSeederFactory(Hashtag, () => {
  const hashtag = new Hashtag();
  hashtag.name = '#' + faker.word.sample().toLowerCase();
  return hashtag;
});
