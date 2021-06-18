import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TweeterProfile } from '@prisma/client';
import { ProfileService } from './profile.service';
import { ProfileDto } from './profile.dto';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {
  }

  @Get()
  async getAllProfiles() {
    const profiles: TweeterProfile[] = await this.profileService.getAllProfiles();
    return profiles;
  }

  @Get(':id')
  async getProfile(@Param('id', ParseIntPipe) id: number) {
    const profile: TweeterProfile = await this.profileService.getProfile(id);
    return profile;
  }

  @Post()
  async createProfile(@Body() profileDto: ProfileDto) {
    const profile: TweeterProfile = await this.profileService.createProfile(profileDto);
    return profile;
  }
}
