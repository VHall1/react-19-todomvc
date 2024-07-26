import { db } from "@/util/db";
import { revalidatePath } from "next/cache";

export function Header() {
  const handleFormSubmit = async (formData: FormData) => {
    "use server";
    const content = formData.get("content")?.toString();
    if (!content) return;
    await db.todo.create({ data: { content } });
    revalidatePath("/");
  };

  return (
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
  );
}
