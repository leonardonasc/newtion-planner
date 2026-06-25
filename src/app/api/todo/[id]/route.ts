import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import {
  getTodo,
  createTodoItem,
  deleteTodoItem,
  updateTodoItem,
} from "@/server/todo-items";

async function getUserId(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  return session?.user?.id ?? null;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const userId = await getUserId(request);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const todo = await getTodo(userId, id);

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(todo);
}

export async function POST(request: Request) {
  const userId = await getUserId(request);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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

  const newTodoItem = await createTodoItem(userId, {
    content,
    position,
    completed,
    todoId,
  });

  if (!newTodoItem) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(newTodoItem, { status: 201 });
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

  const deletedItem = await deleteTodoItem(userId, id);

  if (!deletedItem) {
    return NextResponse.json({ error: "Todo item not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Todo item deleted successfully" });
}

export async function PATCH(request: Request) {
  const userId = await getUserId(request);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, content, completed } = await request.json();

  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const updatedItem = await updateTodoItem(userId, id, {
    content,
    completed,
  });

  if (!updatedItem) {
    return NextResponse.json({ error: "Todo item not found" }, { status: 404 });
  }

  return NextResponse.json(updatedItem);
}