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

