"use server";

import { auth } from "@/lib/auth";
import { db } from "@/db/drizzle";
import { todo, todoItems } from "@/db/schema";
import {
  createTodoSchema,
  createTodoItemSchema,
  deleteTodoSchema,
  deleteTodoItemSchema,
  toggleTodoItemSchema,
  todoSortSchema,
} from "@/validations/todos";
import { asc, desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

type SortOption = "title" | "createdAt";

const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  return session;
};

export const createTodo = async (data: {
  title: string;
  description?: string;
}) => {
  const user = await getSession();
  const parsed = createTodoSchema.parse(data);

  const [newTodo] = await db
    .insert(todo)
    .values({
      id: crypto.randomUUID(),
      title: parsed.title,
      description: data.description ?? null,
      userId: user.user.id,
    })
    .returning();

  revalidatePath("/todo");
  return { success: true, todo: newTodo };
};

export const createTodoItem = async (data: {
  content: string;
  todoId: string;
}) => {
  const user = await getSession();
  const parsed = createTodoItemSchema.parse(data);

  const todoOwner = await db.query.todo.findFirst({
    where: eq(todo.id, parsed.todoId),
  });

  if (!todoOwner || todoOwner.userId !== user.user.id) {
    throw new Error("Todo not found or unauthorized");
  }

  const [newTodoItem] = await db
    .insert(todoItems)
    .values({
      id: crypto.randomUUID(),
      content: parsed.content,
      completed: false,
      position: 0,
      todoId: parsed.todoId,
    })
    .returning();

  revalidatePath("/todo");
  return { success: true, todoItem: newTodoItem };
};

export const getTodos = async (sortBy: SortOption = "createdAt") => {
  const user = await getSession();
  const parsedSort = todoSortSchema.parse(sortBy);

  const todos = await db.query.todo.findMany({
    where: eq(todo.userId, user.user.id),
    orderBy: [parsedSort === "title" ? asc(todo.title) : desc(todo.createdAt)],
    with: {
      items: {
        orderBy: asc(todoItems.position),
      },
    },
  });

  return todos;
};

export const deleteTodo = async (data: { id: string }) => {
  const user = await getSession();
  const parsed = deleteTodoSchema.parse(data);

  const todoOwner = await db.query.todo.findFirst({
    where: eq(todo.id, parsed.id),
  });

  if (!todoOwner || todoOwner.userId !== user.user.id) {
    throw new Error("Todo not found or unauthorized");
  }

  await db.delete(todoItems).where(eq(todoItems.todoId, parsed.id));

  await db.delete(todo).where(eq(todo.id, parsed.id));

  revalidatePath("/todo");
  return { success: true };
};

export const deleteTodoItem = async (data: { id: string }) => {
  const user = await getSession();
  const parsed = deleteTodoItemSchema.parse(data);

  const item = await db.query.todoItems.findFirst({
    where: eq(todoItems.id, parsed.id),
    with: {
      todo: true,
    },
  });

  if (!item || item.todo.userId !== user.user.id) {
    throw new Error("Todo item not found or unauthorized");
  }

  await db.delete(todoItems).where(eq(todoItems.id, parsed.id));

  revalidatePath("/todo");

  return { success: true };
};

export const toggleTodoItem = async (data: {
  id: string;
  completed: boolean;
}) => {
  const user = await getSession();
  const parsed = toggleTodoItemSchema.parse(data);

  const item = await db.query.todoItems.findFirst({
    where: eq(todoItems.id, parsed.id),
    with: {
      todo: true,
    },
  });

  if (!item || item.todo.userId !== user.user.id) {
    throw new Error("Todo item not found or unauthorized");
  }

  const [updatedItem] = await db
    .update(todoItems)
    .set({
      completed: parsed.completed,
    })
    .where(eq(todoItems.id, parsed.id))
    .returning();

  revalidatePath("/todo");
  return { success: true, todoItem: updatedItem };
};
