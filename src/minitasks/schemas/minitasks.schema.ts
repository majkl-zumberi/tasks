import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MinitaskDocument = Minitask & Document;
@Schema()
export class Minitask {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  done: boolean;

  @Prop()
  taskNote: string;

  @Prop()
  note: string;
}

export const MinitaskSchema = SchemaFactory.createForClass(Minitask);
