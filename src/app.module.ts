import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TodosModule } from './todos/todos.module';
import { join } from 'path'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot(process.env.DATABASE_URL),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'graphql.schema.ts'),
        outputAs: 'class'
      },
    }),
  ],
})
export class AppModule {}
