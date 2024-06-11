import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Todo {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  status: boolean;

  @Prop()
  description: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);