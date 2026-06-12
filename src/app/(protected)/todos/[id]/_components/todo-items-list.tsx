'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { TodoItems } from '@/validations/todos'
import { Pencil, Trash, Check, X } from 'lucide-react'
import { toast } from 'sonner'

interface TodoItemsListProps {
    todoItems: TodoItems[]
}

export default function TodoItemsList({ todoItems }: TodoItemsListProps) {
    const [items, setItems] = useState(todoItems)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editContent, setEditContent] = useState("")

    useEffect(() => {
        setItems(todoItems)
    }, [todoItems])

    const handleStartEdit = (id: string, content: string) => {
        setEditingId(id)
        setEditContent(content)
    }

    const handleSaveEdit = async (id: string) => {
        if (!editContent.trim()) {
            toast.error('Content cannot be empty')
            return
        }

        const previousItems = items
        setItems((current) =>
            current.map((item) =>
                item.id === id ? { ...item, content: editContent } : item,
            ),
        )
        setEditingId(null)

        try {
            const response = await fetch('/api/todo/items', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, content: editContent }),
            })

            if (!response.ok) {
                throw new Error('Failed to update todo item')
            }

            toast.success('Todo item updated successfully')
        } catch (error) {
            setItems(previousItems)
            console.error('Error updating todo item:', error)
            toast.error('Failed to update todo item')
        }
    }

    const handleCancelEdit = () => {
        setEditingId(null)
        setEditContent("")
    }

    const handleDelete = async (id: string) => {
        const previousItems = items
        setItems((current) => current.filter((item) => item.id !== id))

        try {
            const response = await fetch('/api/todo/items', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            })

            if (!response.ok) {
                throw new Error('Failed to delete todo item')
            }

            toast.success('Todo item deleted successfully')
        } catch (error) {
            setItems(previousItems)
            console.error('Error deleting todo item:', error)
            toast.error('Failed to delete todo item')
        }
    }

    const handleToggleComplete = async (id: string) => {
        const previousItems = items
        const nextItems = items.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item,
        )

        setItems(nextItems)

        try {
            const item = previousItems.find((currentItem) => currentItem.id === id)
            if (!item) return

            const response = await fetch('/api/todo/items', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, completed: !item.completed }),
            })

            if (!response.ok) {
                throw new Error('Failed to update todo item')
            }
        } catch (error) {
            setItems(previousItems)
            console.error('Error updating todo item:', error)
            toast.error('Failed to update todo item')
        }
    }

    return (
        <div className="flex flex-col gap-y-3 border-primary p-4">
            {items.length === 0 ? (
                <p className="text-muted-foreground">No todo items found.</p>
            ) : (
                items.map((item) => (
                    <div key={item.id} className="flex items-center gap-x-3 bg-secondary p-2 rounded">
                        {editingId === item.id ? (
                            <>
                                <Input
                                    value={editContent}
                                    onChange={(e) => setEditContent(e.target.value)}
                                    className="w-full"
                                    autoFocus
                                />
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => handleSaveEdit(item.id)}
                                >
                                    <Check className="w-4 h-4" />
                                </Button>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={handleCancelEdit}
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </>
                        ) : (
                            <>
                                <h2 className="w-full text-secondary-foreground">
                                    {item.content}
                                </h2>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleStartEdit(item.id, item.content)}
                                >
                                    <Pencil className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    <Trash className="w-4 h-4" />
                                </Button>
                                <Checkbox
                                    checked={item.completed}
                                    onCheckedChange={() => handleToggleComplete(item.id)}
                                />
                            </>
                        )}
                    </div>
                ))
            )}
        </div>
    )
}