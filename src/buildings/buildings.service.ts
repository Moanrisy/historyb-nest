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

  async findAll() {
    return await this.prisma.building.findMany({});
  }

  async findOne(id: number) {
    return await this.prisma.building.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateBuildingDto: UpdateBuildingDto) {
    const building = await this.prisma.building.updateMany({
      where: {
        id,
      },
      data: {
        ...updateBuildingDto,
      },
    });

    console.log('hmm');

    console.log(building);

    return building;
  }

  async remove(id: number) {
    const result = await this.prisma.building.delete({
      where: {
        id,
      },
    });

    if (result) {
      return {
        message: 'Building with id ' + id + ' deleted',
      };
    }
  }
}
