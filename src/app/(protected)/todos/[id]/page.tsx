
import Link from "next/link";
import TodoItemCreate from "./_components/todo-items-create";
import TodoItemsList from "./_components/todo-items-list";
import { cookies } from "next/headers";
import { ArrowBigLeft } from "lucide-react";

export default async function page(props: { params: { id: string } }) {

    const { id } = await props.params;
    const cookieStore = await cookies();

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/todo/${id}`,
        {
            headers: {
                cookie: cookieStore.toString(),
            },
            cache: "no-store",
        }
    );
    const todo = await res.json();

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/todos" className="text-blue-500 hover:underline">
                    <ArrowBigLeft />
                </Link>
                <h1 className="text-2xl font-bold">{todo.title}</h1>
            </div>
            <TodoItemCreate params={{ id }} />
            <TodoItemsList todoItems={todo.todoItems} />
        </div>
    )
}
