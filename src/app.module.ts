import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingsModule } from './buildings/buildings.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BuildingsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
