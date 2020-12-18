import { Module } from '@nestjs/common';
import { MinitasksModule } from './minitasks/minitasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OperationsModule } from './operations/operations.module';
@Module({
  imports: [
    MinitasksModule,
    MongooseModule.forRoot('mongodb://localhost/nestTasks'),
    OperationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
