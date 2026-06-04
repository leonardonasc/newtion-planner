import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { todo, todoItems } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const todos = await db.query.todo.findMany({
    where: eq(todo.userId, userId),
    with: {
      items: true,
    },
  });

  return NextResponse.json(
    todos.map((todo) => ({
      ...todo,
      todoItems: todo.items,
    })),
  );
}

export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title } = await request.json();
  if (!title || typeof title !== "string") {
    return NextResponse.json(
      { error: "Title is required and must be a string" },
      { status: 400 },
    );
  }

  const newTodo = {
    id: crypto.randomUUID(),
    title,
    userId,
    todoItems: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await db.insert(todo).values(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
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

  const todoToDelete = async (page = 1, pageSize = 10) => {
    const sq = db
      .select({ todoId: todo.id })
      .from(todo)
      .orderBy(todo.id)
      .where(eq(todo.id, id))
      .limit(pageSize)
      .offset((page - 1) * pageSize)
      .as("subquery");

    await db
      .select()
      .from(todoItems)
      .innerJoin(sq, eq(todoItems.todoId, sq.todoId))
      .where(eq(todo.userId, userId));
  };
  if (todoToDelete.length === 0) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  await db.delete(todo).where(eq(todo.id, id));
  return NextResponse.json({ message: "Todo deleted successfully" });
}
