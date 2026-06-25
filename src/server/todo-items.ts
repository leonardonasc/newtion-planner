import { and, eq } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { todo, todoItems } from "@/db/schema";

export async function getTodo(userId: string, id: string) {
  const [todoRow] = await db
    .select()
    .from(todo)
    .where(and(eq(todo.id, id), eq(todo.userId, userId)))
    .limit(1);

  if (!todoRow) {
    return null;
  }

  const items = await db
    .select()
    .from(todoItems)
    .where(eq(todoItems.todoId, id))
    .orderBy(todoItems.position);

  return {
    ...todoRow,
    todoItems: items,
  };
}

async function getTodoItemForUser(userId: string, itemId: string) {
  const [todoItem] = await db
    .select({
      id: todoItems.id,
      content: todoItems.content,
      completed: todoItems.completed,
      position: todoItems.position,
      todoId: todoItems.todoId,
      createdAt: todoItems.createdAt,
      updatedAt: todoItems.updatedAt,
    })
    .from(todoItems)
    .innerJoin(todo, eq(todoItems.todoId, todo.id))
    .where(and(eq(todoItems.id, itemId), eq(todo.userId, userId)))
    .limit(1);

  return todoItem ?? null;
}

export async function createTodoItem(
  userId: string,
  data: {
    content: string;
    todoId: string;
    position?: number;
    completed?: boolean;
  },
) {
  const [parentTodo] = await db
    .select()
    .from(todo)
    .where(and(eq(todo.id, data.todoId), eq(todo.userId, userId)))
    .limit(1);

  if (!parentTodo) {
    return null;
  }

  const newTodoItem = {
    id: crypto.randomUUID(),
    content: data.content,
    completed: data.completed ?? false,
    position: data.position ?? 0,
    todoId: data.todoId,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await db.insert(todoItems).values(newTodoItem);

  return newTodoItem;
}

export async function deleteTodoItem(userId: string, id: string) {
  const todoItem = await getTodoItemForUser(userId, id);

  if (!todoItem) {
    return null;
  }

  await db.delete(todoItems).where(eq(todoItems.id, id));

  return todoItem;
}

export async function updateTodoItem(
  userId: string,
  id: string,
  data: {
    content?: string;
    completed?: boolean;
  },
) {
  const todoItem = await getTodoItemForUser(userId, id);

  if (!todoItem) {
    return null;
  }

  const updatedFields: Partial<typeof todoItems.$inferInsert> = {
    updatedAt: new Date(),
  };

  if (data.content !== undefined) {
    updatedFields.content = data.content;
  }

  if (data.completed !== undefined) {
    updatedFields.completed = data.completed;
  }

  await db
    .update(todoItems)
    .set(updatedFields)
    .where(eq(todoItems.id, id));

  return {
    ...todoItem,
    ...updatedFields,
  };
}