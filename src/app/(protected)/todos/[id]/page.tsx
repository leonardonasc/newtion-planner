'use client'

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Todo } from "@/validations/todos";
import { NotebookText } from "lucide-react";
import { useParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react";
import Loading from "../loading";

export default function page() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState<Todo | null>(null);

    useEffect(() => {
        async function fetchTodo() {
            setLoading(true);
            const response = await fetch(`/api/todo/${id}`);
            const data = await response.json();
            setTodo(data);
            setLoading(false);
        }
        fetchTodo()
    }, [])

    return (
        <div className="container mx-auto p-4 w-[50%]">

            <h1>oi</h1>
            <Suspense fallback={<Loading />}>
                {loading ? (
                    <Loading />
                ) : (
                    <div className="flex flex-col gap-y-3 border-primary p-4">
                    {todo?.todoItems.length === 0 ? (
                        <p className="text-muted-foreground">
                            No todo items found.
                        </p>
                    ) : (
                        todo?.todoItems.map((item) => (
                            <div key={item.id}>
                                <h2 className="text-lg font-semibold">{item.content}</h2>
                            </div>
                        ))
                    )}
                    </div>
                )}
            </Suspense>
        </div>
    )
}
