import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeletedResponse, Todo } from '../graphql.schema';
import { Model } from 'mongoose';

interface IEditParams {
  name?: string,
  status?: boolean,
  description?: string
}

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async create(name: string, status: boolean, description?: string): Promise<Todo> {
    const createdTodo = new this.todoModel({ name, status, description });

    return createdTodo.save();
  }

  async edit(id: string, data: IEditParams): Promise<Todo> {
    return this.todoModel.findOneAndUpdate({ _id: id }, { ...data })
  }

  async delete(id: string): Promise<DeletedResponse> {
    await this.todoModel.findByIdAndDelete(id)

    return { id }
  }

  async getAll(): Promise<Todo[]> {
    return this.todoModel.find().sort({ status: 1, createdAt: -1 })
  }
}