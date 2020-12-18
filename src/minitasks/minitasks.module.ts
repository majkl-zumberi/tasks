import { Module } from '@nestjs/common';
import { MinitasksController } from './minitasks.controller';
import { MinitasksService } from './minitasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Minitask,
  MinitaskSchema,
} from './schemas/minitasks.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Minitask.name, schema: MinitaskSchema },
    ]),
  ],
  controllers: [MinitasksController],
  providers: [MinitasksService],
})
export class MinitasksModule {}
