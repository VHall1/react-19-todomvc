"use client";

import clsx from "clsx";
import type { getTodos, toggleTodo } from "../actions";

export function TodoItem({ todo, toggleTodoAction }: TodoItemProps) {
  const handleOnChange = () => {
    toggleTodoAction(todo.id);
  };

  return (
    <li className={clsx({ completed: todo.completed })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={handleOnChange}
        />
        <label>{todo.content}</label>
        <button className="destroy"></button>
      </div>
    </li>
  );
}

interface TodoItemProps {
  todo: Awaited<ReturnType<typeof getTodos>>[number];
  toggleTodoAction: typeof toggleTodo;
}
