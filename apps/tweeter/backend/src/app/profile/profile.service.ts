import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma.service';
import { TweeterProfile } from '@prisma/client';
import { ProfileDto } from './profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {
  }

  getAllProfiles() {
    return this.prisma.tweeterProfile.findMany();
  }

  getProfile(id: number): Promise<TweeterProfile> {
    return this.prisma.tweeterProfile.findUnique({ where: { id } });
  }

  createProfile(profileDto: ProfileDto): Promise<TweeterProfile> {
    return this.prisma.tweeterProfile.create({
      data: {...profileDto}
    });
  }
}
