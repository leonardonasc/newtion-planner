
import { Suspense } from "react"
import TodoCreate from "./_components/todo-create"
import TodoLists from "./_components/todo-lists"
import { cookies } from "next/headers";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";

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
            <div className="flex items-center gap-4">
                <Link href="/dashboard" className="text-blue-500 hover:underline border border-primary p-2 rounded">
                    <ArrowBigLeft />
                </Link>
                <h1 className="text-2xl font-bold text-primary-foreground">Your Todos</h1>
            </div>
            <TodoCreate />
            <Suspense fallback={<h1 className="text-lg text-white">Loading...</h1>}>
                <TodoLists todos={todos} />
            </Suspense>
        </div>
    )
}
