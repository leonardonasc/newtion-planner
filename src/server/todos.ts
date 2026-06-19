import { and, eq } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { todo, todoItems } from "@/db/schema";

export async function listTodos(userId: string) {
  return db.query.todo.findMany({
    where: eq(todo.userId, userId),
    with: {
      items: true,
    },
  });
}

export async function getTodo(userId: string, id: string) {
  const [existingTodo] = await db
    .select()
    .from(todo)
    .where(and(eq(todo.id, id), eq(todo.userId, userId)))
    .limit(1);

  if (!existingTodo) {
    return null;
  }

  const items = await db
    .select()
    .from(todoItems)
    .where(eq(todoItems.todoId, id))
    .orderBy(todoItems.position);

  return {
    ...existingTodo,
    todoItems: items,
  };
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

  return {
    ...newTodo,
    todoItems: [],
  };
}

export async function updateTodo(
  userId: string,
  id: string,
  data: { title?: string },
) {
  const existingTodo = await getTodo(userId, id);

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
  const existingTodo = await getTodo(userId, id);

  if (!existingTodo) {
    return null;
  }

  await db.delete(todo).where(and(eq(todo.id, id), eq(todo.userId, userId)));

  return existingTodo;
}
