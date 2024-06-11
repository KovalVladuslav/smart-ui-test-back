import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TodosService } from './todos.service';

@Resolver('Todo')
export class TodosResolver {
  constructor (private todosService: TodosService) {}

  @Query()
  async getTodos() {
    return this.todosService.getAll();
  }

  @Mutation()
  async createTodo(
    @Args('name') name: string,
    @Args('status') status: boolean,
    @Args('description') description?: string
  ) {
    return this.todosService.create(name, status)
  }

  @Mutation()
  async editTodo(
    @Args('id') id: string,
    @Args('name') name?: string,
    @Args('status') status?: boolean,
    @Args('description') description?: string
  ) {
    return this.todosService.edit(id, { name, description, status })
  }

  @Mutation()
  async deleteTodo(
    @Args('id') id: string,
  ) {
    return this.todosService.delete(id)
  }
}