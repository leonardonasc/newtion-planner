import { Button } from '@/components/ui/button';
import { deleteTodo } from '@/server/todos';
import { Trash } from 'lucide-react';
import React from 'react'

type Props = {
    selectedTodoId: string | null;
}

export default function DeleteTodo({ selectedTodoId }: Props) {
    return (
        <form
            action={async () => {
                if (selectedTodoId) {
                    await deleteTodo({
                        id: selectedTodoId,
                    });
                }
            }}
        >
            <Button variant="destructive">
                <Trash className="size-4" />
            </Button>
        </form>
    )
}
