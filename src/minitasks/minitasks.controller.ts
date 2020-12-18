import { Body, Controller, Get, Post } from '@nestjs/common';
import { MinitasksService } from './minitasks.service';
import { InjectModel } from '@nestjs/mongoose';
import { Minitask, MinitaskDocument } from './schemas/minitasks.schema';
import { Model } from 'mongoose';
import { CreateMinitaskDto } from './dto/create-minitask.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('minitasks')
export class MinitasksController {
  constructor(private minitaskService: MinitasksService) {}

  @Get()
  async getMinitasks() {
    return await this.minitaskService.findAll();
  }

  @ApiBody({ type: [CreateMinitaskDto] })
  @Post()
  async createMinitask(@Body() createMinitaskDto: CreateMinitaskDto): Promise<Minitask> {
    return await this.minitaskService.createMinitask(createMinitaskDto);
  }
}
