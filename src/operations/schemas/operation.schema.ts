import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Minitask } from '../../minitasks/schemas/minitasks.schema';

export type OperationDocument = Operation & Document;

@Schema()
export class Operation {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: [{ type: [mongoose.Schema.Types.ObjectId], ref: 'Minitask' }],
    required: true,
  })
  tasks: [Minitask];
}
export const OperationSchema = SchemaFactory.createForClass(Operation);
OperationSchema.virtual('tasksIds').get(function () {
  return this.tasks.map(({ _id }) => _id);
});
OperationSchema.set('toJSON', { virtuals: true });
