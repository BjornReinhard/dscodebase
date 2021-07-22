import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ProfileModule } from './profile/profile.module';
import { ConfigModule } from '@nestjs/config';
import { TweetModule } from './tweets/tweet.module';
import config from '../configs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ProfileModule,
    TweetModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {
}
