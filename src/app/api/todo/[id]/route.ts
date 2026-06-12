import { db } from "@/db/drizzle";
import { todo, todoItems } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq, and } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const session = await auth.api.getSession({ headers: request.headers });
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const [todoRow] = await db
    .select()
    .from(todo)
    .where(and(eq(todo.id, id), eq(todo.userId, userId)))
    .limit(1);

  if (!todoRow) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  const items = await db
    .select()
    .from(todoItems)
    .where(eq(todoItems.todoId, id))
    .orderBy(todoItems.position);

  return NextResponse.json({ ...todoRow, todoItems: items });
}

export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { content, position, completed, todoId } = await request.json();
  if (!content || typeof content !== "string") {
    return NextResponse.json(
      { error: "Content is required and must be a string" },
      { status: 400 },
    );
  }

  if (!todoId || typeof todoId !== "string") {
    return NextResponse.json(
      { error: "Todo ID is required and must be a string" },
      { status: 400 },
    );
  }

  const newTodoItem = {
    id: crypto.randomUUID(),
    content,
    position: typeof position === "number" ? position : 0,
    completed: Boolean(completed),
    createdAt: new Date(),
    updatedAt: new Date(),
    todoId,
  };

  await db.insert(todoItems).values(newTodoItem);

  return NextResponse.json(newTodoItem, { status: 201 });
}

export async function DELETE(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  // Verify that the todo item belongs to a todo that belongs to the user
  const [todoItem] = await db
    .select()
    .from(todoItems)
    .where(eq(todoItems.id, id))
    .limit(1);

  if (!todoItem) {
    return NextResponse.json({ error: "Todo item not found" }, { status: 404 });
  }

  const [parentTodo] = await db
    .select()
    .from(todo)
    .where(and(eq(todo.id, todoItem.todoId), eq(todo.userId, userId)))
    .limit(1);

  if (!parentTodo) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await db.delete(todoItems).where(eq(todoItems.id, id));

  return NextResponse.json({ message: "Todo item deleted successfully" });
}

export async function PATCH(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;

  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, content, completed } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  // Verify that the todo item belongs to a todo that belongs to the user
  const [todoItem] = await db
    .select()
    .from(todoItems)
    .where(eq(todoItems.id, id))
    .limit(1);

  if (!todoItem) {
    return NextResponse.json({ error: "Todo item not found" }, { status: 404 });
  }

  // Check if the parent todo belongs to the user
  const [parentTodo] = await db
    .select()
    .from(todo)
    .where(and(eq(todo.id, todoItem.todoId), eq(todo.userId, userId)))
    .limit(1);

  if (!parentTodo) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const updatedFields: Partial<typeof todoItems.$inferSelect> = {};

  if (content !== undefined) {
    if (typeof content !== "string") {
      return NextResponse.json(
        { error: "Content must be a string" },
        { status: 400 },
      );
    }

    updatedFields.content = content;
  }

  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      return NextResponse.json(
        { error: "Completed must be a boolean" },
        { status: 400 },
      );
    }

    updatedFields.completed = completed;
  }

  if (Object.keys(updatedFields).length === 0) {
    return NextResponse.json(
      { error: "At least one field (content or completed) must be provided" },
      { status: 400 },
    );
  }

  await db.update(todoItems).set(updatedFields).where(eq(todoItems.id, id));

  return NextResponse.json({ message: "Todo item updated successfully" });
}
