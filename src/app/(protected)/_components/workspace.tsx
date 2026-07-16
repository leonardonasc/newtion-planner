'use client'

import { useState, type ChangeEvent } from "react"
import { getTodos, updateTodoItem } from "@/server/todos"
import { ArrowRight, Pencil } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import CreateTodoForm from "./create-todo-form"
import CreateTaskButton from "./create-task-button"
import { Checkbox } from "@/components/ui/checkbox"
import DeleteTodo from "./delete-todo"
import DeleteTodoItemButton from "./delete-todo-item"

// todo: arrumar a tipagem depois
type TodoItem = Awaited<ReturnType<typeof getTodos>>[number]

type WorkspaceProps = {
    todos: TodoItem[]
}

export default function Workspace({ todos }: WorkspaceProps) {
    const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [isCreateTodoFormOpen, setIsCreateTodoFormOpen] = useState(false)

    const [editingTodoItemId, setEditingTodoItemId] = useState<string | null>(null)
    const [editingContent, setEditingContent] = useState("")

    const [editingTodoId, setEditingTodoId] = useState<string | null>(null)

    const handleTodoSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase())
    }

    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm)
    )

    const selectedTodo =
        todos.find(todo => todo.id === selectedTodoId) ?? null

    return (
        <div className="flex md:flex-row flex-col mt-15 md:0 gap-4 w-full">
            {isCreateTodoFormOpen && (
                <CreateTodoForm
                    onClose={() => setIsCreateTodoFormOpen(false)}
                />
            )}

            <div className="w-full h-full border rounded-md shadow p-4">
                <h1>Listas de Tarefas</h1>

                <div>
                    <Input
                        placeholder="Buscar tarefas..."
                        className="mb-4 rounded-md"
                        onChange={handleTodoSearch}
                    />

                    <Button
                        variant="outline"
                        className="w-full mb-4"
                        onClick={() => setIsCreateTodoFormOpen(true)}
                    >
                        Nova Lista
                    </Button>
                </div>

                <ul>
                    {filteredTodos.map((todo) => (
                        <li
                            key={todo.id}
                            className={`cursor-pointer p-2 ${selectedTodoId === todo.id
                                ? "bg-offwhite-200 rounded-md"
                                : ""
                                }`}
                            onClick={() => setSelectedTodoId(todo.id)}
                        >
                            <div className="flex items-center justify-between">
                                <p>{todo.title}</p>
                                <ArrowRight size={16} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex-1 h-full border rounded-md shadow p-4">
                {selectedTodo ? (
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-bold">
                                        {selectedTodo.title}
                                    </h2>
                                    <DeleteTodo selectedTodoId={selectedTodo.id} />
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {selectedTodo.description}
                                </p>
                            </div>
                        </div>

                        <CreateTaskButton todoId={selectedTodo.id} />

                        <ul className="mt-4 space-y-2">
                            {selectedTodo.items.map((item) => (
                                <li
                                    key={item.id}
                                    className="border rounded-md p-2 flex justify-between items-center"
                                >
                                    {editingTodoItemId === item.id ? (
                                        <form
                                            className="flex items-center gap-2 flex-1"
                                            action={async () => {
                                                await updateTodoItem({
                                                    id: item.id,
                                                    content: editingContent,
                                                })
                                                setEditingTodoItemId(null)
                                            }}
                                        >
                                            <Input
                                                value={editingContent}
                                                onChange={(event) => setEditingContent(event.target.value)}
                                            />
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                type="submit"
                                            >
                                                Salvar
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => setEditingTodoItemId(null)}
                                            >
                                                Cancelar
                                            </Button>
                                        </form>
                                    ) : (
                                        <p>{item.content}</p>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="px-2 py-1"
                                            onClick={() => {
                                                setEditingTodoItemId(item.id)
                                                setEditingContent(item.content)
                                            }}
                                        >
                                            <Pencil size={16} />
                                        </Button>
                                        <DeleteTodoItemButton todoItemId={item.id} />
                                        <Checkbox checked={item.completed} onCheckedChange={() => {
                                        }} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="text-gray-500">
                        Selecione ou crie uma lista para ver os detalhes.
                    </p>
                )}
            </div>
        </div>
    )
}