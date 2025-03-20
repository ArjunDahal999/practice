import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './main.seeder';
import { Tweet } from '../tweet/tweet.entity';
import { User } from '../users/user.entity';
import { Profile } from '../profile/profile.entity';
import { Hashtag } from '../hashtag/hashtag.entity';

// Import all factory files
import './profile.factory';
import './user.factory';
import './tweet.factory';
import './hashtag.factory';
import dbConfig from '../config/db.config';

const options: DataSourceOptions & SeederOptions = {
  ...dbConfig(),
  logging: true,
  entities: [User, Tweet, Profile, Hashtag],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});
