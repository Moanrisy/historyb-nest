import { Module } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { BuildingsController } from './buildings.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [BuildingsController],
  providers: [BuildingsService],
  imports: [PrismaModule],
})
export class BuildingsModule {}
