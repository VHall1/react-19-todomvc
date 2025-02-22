"use client";

import clsx from "clsx";
import type { destroyTodo, getTodos, toggleTodo } from "../actions";
import { useFilter } from "./context";

export function TodoItem({
  todo,
  toggleTodoAction,
  destroyTodoAction,
}: TodoItemProps) {
  const filter = useFilter();

  const shouldRender =
    filter === "all" ||
    (filter === "completed" && todo.completed) ||
    (filter === "active" && !todo.completed);

  if (!shouldRender) return null;

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
