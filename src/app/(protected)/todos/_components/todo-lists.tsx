'use client'

import { Button } from '@/components/ui/button'
import { Todo } from '@/validations/todos'
import Link from 'next/link'

interface TodoListsProps {
  todos: Todo[]
}

export default function TodoLists({ todos }: TodoListsProps) {
  return (
    <div className="w-full flex items-start justify-start gap-4">
      {todos.map((todo) => (
        <div key={todo.id} className="flex border border-primary p-4">
          <div className="flex flex-col gap-y-2">
            <h2>{todo.title}</h2>

            <Link href={`/todos/${todo.id}`}>
              <Button variant="outline">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}