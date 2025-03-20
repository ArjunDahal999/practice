import { faker } from '@faker-js/faker';
import { Tweet } from '../tweet/tweet.entity';
import { User } from '../users/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Profile } from '../profile/profile.entity';
import { Hashtag } from '../hashtag/hashtag.entity';

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const userRepo = dataSource.getRepository(User);
    const tweetRepo = dataSource.getRepository(Tweet);
    const hashtagRepo = dataSource.getRepository(Hashtag);

    // Create factories
    const userFactory = factoryManager.get(User);
    const profileFactory = factoryManager.get(Profile);
    const tweetFactory = factoryManager.get(Tweet);
    const hashtagFactory = factoryManager.get(Hashtag);

    // Create hashtags
    console.log('Seeding hashtags...');
    const hashtags = await Promise.all(
      Array(10)
        .fill('')
        .map(async () => {
          const hashtag = await hashtagFactory.make();
          return hashtag;
        }),
    );
    await hashtagRepo.save(hashtags);

    // Create users with profiles
    console.log('Seeding users with profiles...');
    const users = await Promise.all(
      Array(10)
        .fill('')
        .map(async () => {
          const profile = await profileFactory.make();
          const user = await userFactory.make({
            profile: profile,
          });
          return user;
        }),
    );
    await userRepo.save(users);

    // Create tweets with hashtags
    console.log('Seeding tweets with hashtags...');
    const tweets = await Promise.all(
      Array(50)
        .fill('')
        .map(async () => {
          const tweet = await tweetFactory.make({
            user: faker.helpers.arrayElement(users),
            hashtags: faker.helpers.arrayElements(
              hashtags,
              faker.number.int({ min: 0, max: 3 }),
            ),
          });
          return tweet;
        }),
    );
    await tweetRepo.save(tweets);

    console.log('Seeding completed successfully!');
  }
}
