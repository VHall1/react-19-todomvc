"use server";

import { db } from "@/util/db";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export const getTodos = cache(() => db.todo.findMany());

export const toggleTodo = async (id: Todo["id"]) => {
  const { completed } = await db.todo.findUniqueOrThrow({
    where: { id },
    select: { completed: true },
  });
  await db.todo.updateMany({ data: { completed: !completed }, where: { id } });
  revalidatePath("/");
};

export const toggleAll = async () => {
  const { completed } = await db.todo.findFirstOrThrow({
    select: { completed: true },
    orderBy: { createdAt: "asc" },
  });
  await db.todo.updateMany({ data: { completed: !completed } });
  revalidatePath("/");
};
