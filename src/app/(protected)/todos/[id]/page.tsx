
import Link from "next/link";
import TodoItemCreate from "./_components/todo-items-create";
import TodoItemsList from "./_components/todo-items-list";
import { cookies } from "next/headers";
import { ArrowLeft } from "lucide-react";

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
        <div className="container mx-auto w-[50%] p-4">
            <div className="flex flex-col gap-4 mb-6">
                <Link href="/todos" className="flex gap-x-2 items-center text-xs text-primary">
                    <ArrowLeft size={15} /> <span>Suas listas</span>
                </Link>
                <div className="rounded-xl border border-primary p-4">
                    <h1 className="text-2xl font-bold">{todo.title}</h1>
                </div>

            </div>
            <TodoItemCreate params={{ id }} />
            <TodoItemsList todoItems={todo.todoItems} />
        </div>
    )
}
