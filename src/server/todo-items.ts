import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { todo, todoItems } from "@/db/schema";

export async function listTodoItems(userId: string, todoId: string) {
  const [parentTodo] = await db
    .select()
    .from(todo)
    .where(and(eq(todo.id, todoId), eq(todo.userId, userId)))
    .limit(1);

  if (!parentTodo) {
    return null;
  }

  return db
    .select()
    .from(todoItems)
    .where(eq(todoItems.todoId, todoId))
    .orderBy(todoItems.position);
}

export async function createTodoItem(
  userId: string,
  data: {
    content: string;
    todoId: string;
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

  const [lastItem] = await db
    .select({
      position: todoItems.position,
    })
    .from(todoItems)
    .where(eq(todoItems.todoId, data.todoId))
    .orderBy(desc(todoItems.position))
    .limit(1);

  const newTodoItem = {
    id: crypto.randomUUID(),
    content: data.content,
    completed: data.completed ?? false,
    position: (lastItem?.position ?? -1) + 1,
    todoId: data.todoId,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await db.insert(todoItems).values(newTodoItem);

  return newTodoItem;
}

export async function updateTodoItem(
  userId: string,
  id: string,
  data: {
    content?: string;
    completed?: boolean;
  },
) {
  const [existingItem] = await db
    .select()
    .from(todoItems)
    .innerJoin(todo, eq(todoItems.todoId, todo.id))
    .where(and(eq(todoItems.id, id), eq(todo.userId, userId)))
    .limit(1);

  if (!existingItem) {
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

  await db.update(todoItems).set(updatedFields).where(eq(todoItems.id, id));

  return {
    ...existingItem,
    ...updatedFields,
  };
}

export async function deleteTodoItem(userId: string, id: string) {
  const [existingItem] = await db
    .select()
    .from(todoItems)
    .innerJoin(todo, eq(todoItems.todoId, todo.id))
    .where(and(eq(todoItems.id, id), eq(todo.userId, userId)))
    .limit(1);

  if (!existingItem) {
    return null;
  }

  await db.delete(todoItems).where(eq(todoItems.id, id));

  return existingItem;
}
