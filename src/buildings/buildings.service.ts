import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';

@Injectable()
export class BuildingsService {
  constructor(private prisma: PrismaService) {}

  create(createBuildingDto: CreateBuildingDto) {
    const building = this.prisma.building.create({
      data: createBuildingDto,
    });
    return building;
  }

  findAll() {
    return this.prisma.building.findMany({});
  }

  findOne(id: number) {
    return this.prisma.building.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, updateBuildingDto: UpdateBuildingDto) {
    const building = this.prisma.building.update({
      where: {
        id,
      },
      data: {
        ...updateBuildingDto,
      },
    });

    return building;
  }

  remove(id: number) {
    return `This action removes a #${id} building`;
  }
}
