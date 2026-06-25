import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { createTodo, deleteTodo, listTodos, updateTodo } from "@/server/todos";

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

  const { title } = await request.json();

  if (!title || typeof title !== "string") {
    return NextResponse.json(
      { error: "Title is required and must be a string" },
      { status: 400 },
    );
  }

  const newTodo = await createTodo(userId, title);

  return NextResponse.json(newTodo, { status: 201 });
}

export async function DELETE(request: Request) {
  const userId = await getUserId(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await request.json();

  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const deletedTodo = await deleteTodo(userId, id);

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

  const { id, title } = await request.json();

  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  if (title !== undefined && typeof title !== "string") {
    return NextResponse.json(
      { error: "Title must be a string" },
      { status: 400 },
    );
  }

  const updatedTodo = await updateTodo(userId, id, { title });

  if (!updatedTodo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(updatedTodo);
}