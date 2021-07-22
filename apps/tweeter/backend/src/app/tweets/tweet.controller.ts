import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweets')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {
  }

  @Get(":id")
  async getAllTweetsByProfileId(@Param('id', ParseIntPipe) id: number) {
    const tweets = await this.tweetService.getAllTweetsByProfileId(id);
    return tweets;
  }
}
