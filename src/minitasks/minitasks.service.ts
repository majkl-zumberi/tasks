import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Minitask, MinitaskDocument } from './schemas/minitasks.schema';
import { Model } from 'mongoose';
import { CreateMinitaskDto } from './dto/create-minitask.dto';

@Injectable()
export class MinitasksService {
  constructor(@InjectModel(Minitask.name) private minitaskModel: Model<MinitaskDocument>,) {}

  async createMinitask(createMinitaskDto: CreateMinitaskDto,): Promise<Minitask> {
    const createdMinitask = new this.minitaskModel(createMinitaskDto);
    try {
      return await createdMinitask.save();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async findAll(): Promise<Minitask[]> {
    return this.minitaskModel.find().exec();
  }
}
