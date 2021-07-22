import { ApiProperty } from '@nestjs/swagger';

export class ProfileDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty()
  followers: number;
  @ApiProperty()
  following: number;
  @ApiProperty()
  bg_path: string | null;
  @ApiProperty()
  avatar_path: string | null;
}
