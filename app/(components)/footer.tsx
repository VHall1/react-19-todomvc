"use client";

import type { destroyCompleted } from "../actions";

export function Footer({ todosLeft, destroyCompletedAction }: FooterProps) {
  return (
    <footer className="footer">
      <span className="todo-count">{todosLeft} item left!</span>
      <ul className="filters">
        <li>
          <a className="selected">All</a>
        </li>
        <li>
          <a>Active</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={() => destroyCompletedAction()}
      >
        Clear completed
      </button>
    </footer>
  );
}

interface FooterProps {
  todosLeft: number;
  destroyCompletedAction: typeof destroyCompleted;
}
