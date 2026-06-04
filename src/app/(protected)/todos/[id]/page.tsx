
import TodoItemCreate from "./_components/todo-items-create";
import TodoItemsList from "./_components/todo-items-list";
import { cookies } from "next/headers";

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
        <div className="container mx-auto p-4 w-[50%]">

            <h1>oi</h1>
            <TodoItemCreate params={{ id }} />
            <TodoItemsList todoItems={todo.todoItems} />
        </div>
    )
}
