export default function Home() {
  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <div className="input-container">
            <input
              id="todo-input"
              className="new-todo"
              placeholder="What needs to be done?"
            />
            <label htmlFor="todo-input" className="visually-hidden">
              New Todo Input
            </label>
          </div>
        </header>
        <main className="main"></main>
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
