import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosResolver } from './todo.resolver';
import { TodosService } from './todos.service';
import { Todo, TodoSchema } from './todo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])],
  providers: [TodosService, TodosResolver],
})
export class TodosModule {}