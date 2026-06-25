'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Todo } from '@/validations/todos'

interface TodoListsProps {
  todos: Todo[]
}

export default function TodoLists({ todos }: TodoListsProps) {
  const [items, setItems] = useState(todos)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editTitle, setEditTitle] = useState('')

  useEffect(() => {
    setItems(todos)
  }, [todos])

  const handleDelete = async (id: string, title: string) => {
    const previousItems = items
    setItems((current) => current.filter((todo) => todo.id !== id))

    try {
      const response = await fetch('/api/todo', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })

      if (!response.ok) {
        throw new Error('Failed to delete todo')
      }

      toast.success(`Todo "${title}" deleted successfully`)
    } catch (error) {
      setItems(previousItems)
      console.error('Error deleting todo:', error)
      toast.error('Failed to delete todo')
    }
  }

  const startEdit = (id: string, title: string) => {
    setEditingId(id)
    setEditTitle(title)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditTitle('')
  }

  const handleSaveEdit = async (id: string) => {
    const trimmedTitle = editTitle.trim()

    if (!trimmedTitle) {
      toast.error('Title cannot be empty')
      return
    }

    const previousItems = items
    setItems((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, title: trimmedTitle } : todo,
      ),
    )

    setEditingId(null)
    setEditTitle('')

    try {
      const response = await fetch('/api/todo', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, title: trimmedTitle }),
      })

      if (!response.ok) {
        throw new Error('Failed to update todo')
      }

      toast.success('Todo updated successfully')
    } catch (error) {
      setItems(previousItems)
      console.error('Error updating todo:', error)
      toast.error('Failed to update todo')
    }
  }

  return (
    <div className="flex w-full items-start justify-start gap-4">
      {items.map((todo) => (
        <div key={todo.id} className="flex border border-primary p-4">
          <div className="flex flex-col gap-y-2">
            {editingId === todo.id ? (
              <>
                <Input
                  value={editTitle}
                  onChange={(event) => setEditTitle(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleSaveEdit(todo.id)
                    }

                    if (event.key === 'Escape') {
                      cancelEdit()
                    }
                  }}
                  autoFocus
                />
                <div className="flex gap-2">
                  <Button onClick={() => handleSaveEdit(todo.id)} variant="outline">
                    Save
                  </Button>
                  <Button onClick={cancelEdit} variant="ghost">
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <>
                <h2>{todo.title}</h2>
                <Button
                  onClick={() => startEdit(todo.id, todo.title)}
                  variant="outline"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(todo.id, todo.title)}
                  variant="destructive"
                >
                  Delete
                </Button>
                <Link href={`/todos/${todo.id}`}>
                  <Button variant="outline">View Details</Button>
                </Link>
                <p>{todo.todoItems?.length ?? 0} items</p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}