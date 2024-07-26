"use client";

import clsx from "clsx";
import Link from "next/link";
import type { destroyCompleted } from "../actions";
import { useFilter } from "./context";

export function Footer({ todosLeft, destroyCompletedAction }: FooterProps) {
  const filter = useFilter();

  return (
    <footer className="footer">
      <span className="todo-count">{todosLeft} item left!</span>
      <ul className="filters">
        <li>
          <Link className={clsx({ selected: filter === "all" })} href="/todos">
            All
          </Link>
        </li>
        <li>
          <Link
            className={clsx({ selected: filter === "active" })}
            href="/todos/active"
          >
            Active
          </Link>
        </li>
        <li>
          <Link
            className={clsx({ selected: filter === "completed" })}
            href="/todos/completed"
          >
            Completed
          </Link>
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
