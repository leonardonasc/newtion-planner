
import { Suspense } from "react"
import TodoCreate from "./_components/todo-create"
import TodoLists from "./_components/todo-lists"
import { cookies } from "next/headers";

export default async function TodoPage() {

    const cookieStore = await cookies();

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/todo`,
        {
            headers: {
                cookie: cookieStore.toString(),
            },
            cache: "no-store",
        }
    );
    const todos = await res.json();
    return (
        <div className="flex min-h-svh w-full flex-col items-start justify-start gap-4 p-6 md:p-10">
            <TodoCreate />
            <Suspense fallback={<h1 className="text-lg text-white">Loading...</h1>}>
                <TodoLists todos={todos} />
            </Suspense>
        </div>
    )
}
