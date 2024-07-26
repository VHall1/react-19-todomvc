import { Header } from "./(components)/header";
import { TodoItem } from "./(components)/todo-item";
import { ToggleAll } from "./(components)/toggle-all";
import { getTodos, toggleAll, toggleTodo } from "./actions";

export default async function Home() {
  const todos = await getTodos();
  const todosLeft = todos.reduce((accum, todo) => {
    if (!todo.completed) {
      return accum + 1;
    }
    return accum;
  }, 0);

  return (
    <section className="todoapp">
      <Header />
      <main className="main">
        <ToggleAll toggleAllAction={toggleAll} />
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem todo={todo} toggleTodoAction={toggleTodo} key={todo.id} />
          ))}
        </ul>
      </main>
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
        <button className="clear-completed" disabled>
          Clear completed
        </button>
      </footer>
    </section>
  );
}
