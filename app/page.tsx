import { db } from "@/util/db";

export default async function Home() {
  const todos = await db.todo.findMany();

  const handleFormSubmit = async (formData: FormData) => {
    "use server";
    const content = formData.get("content")?.toString();
    if (!content) return;
    await db.todo.create({ data: { content } });
  };

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form action={handleFormSubmit} className="input-container">
            <input
              id="todo-input"
              name="content"
              className="new-todo"
              placeholder="What needs to be done?"
            />
            <label htmlFor="todo-input" className="visually-hidden">
              New Todo Input
            </label>
          </form>
        </header>
        <main className="main">
          <div className="toggle-all-container">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" className="toggle-all-label">
              Toggle All Input
            </label>
          </div>
          <ul className="todo-list">
            {todos.map((todo) => (
              <div className="view" key={todo.id}>
                <li className="">
                  <input className="toggle" type="checkbox" />
                  <label>{todo.content}</label>
                  <button className="destroy"></button>
                </li>
              </div>
            ))}
          </ul>
        </main>
        <footer className="footer">
          <span className="todo-count">1 item left!</span>
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
    </>
  );
}
