'use client'

import { useState } from "react"
import { getTodos } from "@/server/todos"
import { ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import CreateTodoForm from "./create-todo-form"
import CreateTaskButton from "./create-task-button"
import { Checkbox } from "@/components/ui/checkbox"

// todo: arrumar a tipagem depois
type TodoItem = Awaited<ReturnType<typeof getTodos>>[number]

type WorkspaceProps = {
    todos: TodoItem[]
}

export default function Workspace({ todos }: WorkspaceProps) {
    const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [isCreateTodoFormOpen, setIsCreateTodoFormOpen] = useState(false)

    const handleTodoSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase())
    }

    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm)
    )

    const selectedTodo =
        todos.find(todo => todo.id === selectedTodoId) ?? null

    return (
        <div className="flex gap-4 w-full">
            {isCreateTodoFormOpen && (
                <CreateTodoForm
                    onClose={() => setIsCreateTodoFormOpen(false)}
                />
            )}

            <div className="w-[30%] h-full border rounded-md shadow p-4">
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
                            className={`cursor-pointer p-2 ${
                                selectedTodoId === todo.id
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
                            <div>
                                <h2 className="text-lg font-bold">
                                    {selectedTodo.title}
                                </h2>
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
                                    <p>{item.content}</p>
                                    <Checkbox checked={item.completed} onCheckedChange={() => {
                                    }} />
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