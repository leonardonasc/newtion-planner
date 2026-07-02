import { and, eq } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";

export async function listTodos(userId: string) {
  return db.query.todo.findMany({
    where: eq(todo.userId, userId),
  });
}

export async function createTodo(userId: string, title: string) {
  const newTodo = {
    id: crypto.randomUUID(),
    title,
    userId,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await db.insert(todo).values(newTodo);

  return newTodo;
}

export async function updateTodo(
  userId: string,
  id: string,
  data: { title?: string },
) {
  const [existingTodo] = await db
    .select()
    .from(todo)
    .where(and(eq(todo.id, id), eq(todo.userId, userId)))
    .limit(1);

  if (!existingTodo) {
    return null;
  }

  const updatedTodo = {
    ...existingTodo,
    title: data.title ?? existingTodo.title,
    updatedAt: new Date(),
  };

  await db
    .update(todo)
    .set({
      title: updatedTodo.title,
      updatedAt: updatedTodo.updatedAt,
    })
    .where(and(eq(todo.id, id), eq(todo.userId, userId)));

  return updatedTodo;
}

export async function deleteTodo(userId: string, id: string) {
  const [existingTodo] = await db
    .select()
    .from(todo)
    .where(and(eq(todo.id, id), eq(todo.userId, userId)))
    .limit(1);

  if (!existingTodo) {
    return null;
  }

  await db.delete(todo).where(and(eq(todo.id, id), eq(todo.userId, userId)));

  return existingTodo;
}