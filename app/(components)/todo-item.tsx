"use client";

import clsx from "clsx";
import type { destroyTodo, getTodos, toggleTodo } from "../actions";

export function TodoItem({
  todo,
  toggleTodoAction,
  destroyTodoAction,
}: TodoItemProps) {
  // TODO: use new action hook here to handle errors?

  return (
    <li className={clsx({ completed: todo.completed })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodoAction(todo.id)}
        />
        <label>{todo.content}</label>
        <button
          className="destroy"
          onClick={() => destroyTodoAction(todo.id)}
        />
      </div>
    </li>
  );
}

interface TodoItemProps {
  todo: Awaited<ReturnType<typeof getTodos>>[number];
  toggleTodoAction: typeof toggleTodo;
  destroyTodoAction: typeof destroyTodo;
}
