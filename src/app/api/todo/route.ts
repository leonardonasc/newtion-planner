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

  const todos = await db.select().from(todo).where(eq(todo.userId, userId));
  return NextResponse.json(todos);
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
