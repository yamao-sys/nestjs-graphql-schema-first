
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateTodoInput {
    title: string;
    content: string;
}

export interface UpdateTodoInput {
    id: number;
    title: string;
    content: string;
}

export interface SubTodo {
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export interface Todo {
    title: string;
    content: string;
    subTodos: SubTodo[];
}

export interface BaseTodo {
    title: string;
    content: string;
}

export interface RemovedResult {
    result?: Nullable<boolean>;
}

export interface IQuery {
    todos(): Nullable<Todo>[] | Promise<Nullable<Todo>[]>;
    todo(id: number): Nullable<Todo> | Promise<Nullable<Todo>>;
}

export interface IMutation {
    createTodo(createTodoInput: CreateTodoInput): BaseTodo | Promise<BaseTodo>;
    updateTodo(updateTodoInput: UpdateTodoInput): BaseTodo | Promise<BaseTodo>;
    removeTodo(id: number): RemovedResult | Promise<RemovedResult>;
}

type Nullable<T> = T | null;
