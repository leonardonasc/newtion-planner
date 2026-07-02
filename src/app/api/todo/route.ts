import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { createTodo, deleteTodo, listTodos, updateTodo } from "@/server/todos";
import {
  createTodoSchema,
  deleteTodoSchema,
  updateTodoSchema,
} from "@/validations/todos";

async function getUserId(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  return session?.user?.id ?? null;
}

export async function GET(request: Request) {
  const userId = await getUserId(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const todos = await listTodos(userId);
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const userId = await getUserId(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = createTodoSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid data", details: parsed.error.format() },
      { status: 400 },
    );
  }

  const newTodo = await createTodo(userId, parsed.data.title);

  return NextResponse.json(newTodo, { status: 201 });
}

export async function DELETE(request: Request) {
  const userId = await getUserId(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = deleteTodoSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid data", details: parsed.error.format() },
      { status: 400 },
    );
  }

  const deletedTodo = await deleteTodo(userId, parsed.data.id);

  if (!deletedTodo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Todo deleted successfully" });
}

export async function PATCH(request: Request) {
  const userId = await getUserId(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = updateTodoSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid data", details: parsed.error.format() },
      { status: 400 },
    );
  }

  const updatedTodo = await updateTodo(userId, parsed.data.id, {
    title: parsed.data.title,
  });

  if (!updatedTodo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(updatedTodo);
}
