import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getAllProfiles(
    @Query('limit', new DefaultValuePipe(4), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.profileService.getAllProfiles(limit, page);
  }
}
