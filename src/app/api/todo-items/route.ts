import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { createTodoItem, listTodoItems } from "@/server/todo-items";
import { createTodoItemSchema } from "@/validations/todos";

async function getUserId(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  return session?.user?.id ?? null;
}

export async function GET(request: Request) {
  const userId = await getUserId(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const todoId = searchParams.get("todoId");

  if (!todoId) {
    return NextResponse.json({ error: "Todo ID is required" }, { status: 400 });
  }

  const items = await listTodoItems(userId, todoId);

  if (!items) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const userId = await getUserId(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = createTodoItemSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid data", details: parsed.error.format() },
      { status: 400 },
    );
  }

  const newItem = await createTodoItem(userId, parsed.data);

  if (!newItem) {
    return NextResponse.json(
      { error: "Todo not found" },
      { status: 404 },
    );
  }

  return NextResponse.json(newItem, { status: 201 });
}