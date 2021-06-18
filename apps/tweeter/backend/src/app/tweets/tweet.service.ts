import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma.service';

@Injectable()
export class TweetService {
  constructor(private prisma: PrismaService) {
  }

  getAllTweetsByProfileId(id: number) {
    return this.prisma.tweeterTweet.findMany({
      where: {
        OR: [
          {
            profile_id: id
          },
          {
            tweeter_retweet: {
              some: {
                profile_id: id
              }
            }
          }
        ]
      }
    });
  }
}
