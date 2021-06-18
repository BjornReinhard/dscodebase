import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { PrismaService } from '../common/services/prisma.service';

@Module({
  controllers: [TweetController],
  providers: [PrismaService, TweetService]
})
export class TweetModule {}
