
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract todos(): Nullable<Nullable<Todo>[]> | Promise<Nullable<Nullable<Todo>[]>>;

    abstract getTodos(): Nullable<Nullable<Todo>[]> | Promise<Nullable<Nullable<Todo>[]>>;
}

export abstract class IMutation {
    abstract createTodo(name: string, status: boolean, description?: Nullable<string>): Nullable<Todo> | Promise<Nullable<Todo>>;

    abstract editTodo(id: string, name?: Nullable<string>, status?: Nullable<boolean>, description?: Nullable<string>): Nullable<Todo> | Promise<Nullable<Todo>>;

    abstract deleteTodo(id: string): Nullable<DeletedResponse> | Promise<Nullable<DeletedResponse>>;
}

export class Todo {
    id: string;
    name: string;
    status: boolean;
    description?: Nullable<string>;
}

export class DeletedResponse {
    id: string;
}

type Nullable<T> = T | null;
