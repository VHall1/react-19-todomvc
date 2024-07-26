import { Footer } from "./(components)/footer";
import { Header } from "./(components)/header";
import { TodoItem } from "./(components)/todo-item";
import { ToggleAll } from "./(components)/toggle-all";
import {
  destroyCompleted,
  destroyTodo,
  getTodos,
  toggleAll,
  toggleTodo,
} from "./actions";

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
            <TodoItem
              todo={todo}
              toggleTodoAction={toggleTodo}
              destroyTodoAction={destroyTodo}
              key={todo.id}
            />
          ))}
        </ul>
      </main>
      <Footer todosLeft={todosLeft} destroyCompletedAction={destroyCompleted} />
    </section>
  );
}
