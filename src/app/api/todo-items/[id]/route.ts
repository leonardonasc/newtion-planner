import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { deleteTodoItem, updateTodoItem } from "@/server/todo-items";
import { updateTodoItemSchema } from "@/validations/todos";

async function getUserId(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  return session?.user?.id ?? null;
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const userId = await getUserId(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  const parsed = updateTodoItemSchema.safeParse({
    ...body,
    id,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid data", details: parsed.error.format() },
      { status: 400 },
    );
  }

  const updatedItem = await updateTodoItem(userId, parsed.data.id, {
    content: parsed.data.content,
    completed: parsed.data.completed,
  });

  if (!updatedItem) {
    return NextResponse.json({ error: "Todo item not found" }, { status: 404 });
  }

  return NextResponse.json(updatedItem);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const userId = await getUserId(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const deletedItem = await deleteTodoItem(userId, id);

  if (!deletedItem) {
    return NextResponse.json({ error: "Todo item not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Todo item deleted successfully" });
}