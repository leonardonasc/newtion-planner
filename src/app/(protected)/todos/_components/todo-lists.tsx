'use client'

import { Button } from '@/components/ui/button'
import { Todo } from '@/validations/todos'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

interface TodoListsProps {
  todos: Todo[]
}


export default function TodoLists({ todos }: TodoListsProps) {
  console.log('todos', todos);

  const router = useRouter();

  const handleDelete = async (id: string, title: string) => {
    try {
      const response = await fetch('/api/todo', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }
      toast.success(`Todo "${title}" deleted successfully`);
      router.refresh();
    }
    catch (error) {
      console.error('Error deleting todo:', error);
      toast.error('Failed to delete todo');
    }
  }

  return (
    <div className="w-full flex items-start justify-start gap-4">
      {todos.map((todo) => (
        <div key={todo.id} className="flex border border-primary p-4">

          <div className="flex flex-col gap-y-2">
            <h2>{todo.title}</h2>
            <Button onClick={() => {
              handleDelete(todo.id, todo.title);
            }} variant="destructive">
              Delete
            </Button>
            <Link href={`/todos/${todo.id}`}>
              <Button variant="outline">
                View Details
              </Button>
            </Link>
            <p>{todo.todoItems?.length ?? 0} items</p>
          </div>
        </div>
      ))}
    </div>
  )
}