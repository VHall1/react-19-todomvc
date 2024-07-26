import { FilterProvider } from "./_components/context";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { TodoItem } from "./_components/todo-item";
import { ToggleAll } from "./_components/toggle-all";
import {
  destroyCompleted,
  destroyTodo,
  getTodos,
  toggleAll,
  toggleTodo,
} from "./actions";

export default async function Todos() {
  const todos = await getTodos();
  const todosLeft = todos.reduce((accum, todo) => {
    if (!todo.completed) {
      return accum + 1;
    }
    return accum;
  }, 0);

  return (
    <FilterProvider>
      <section className="todoapp">
        <Header />
        <main className="main">
          <ToggleAll toggleAllAction={toggleAll} />
          <ul className="todo-list">
            {todos.map((todo) => (
              <TodoItem
                todo={todo}
                toggleTodoAction={toggleTodo}
                destroyTodoAction={destroyTodo}
                key={todo.id}
              />
            ))}
          </ul>
        </main>
        <Footer
          todosLeft={todosLeft}
          destroyCompletedAction={destroyCompleted}
        />
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href="http://github.com/vhall1">Victor Hall</a>{" "}
          <a href="http://github.com/vhall1/react-19-todomvc">(Source)</a>
        </p>
        <p>
          Inspired by <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </FilterProvider>
  );
}
