import { createTodo } from "@/server/todos"


type Props = {
    onClose?: () => void
}

export default function CreateTodoForm({ onClose }: Props) {

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background text-foreground border border-border p-4 rounded-md shadow-md">
            <form action={async (formData) => {
                await createTodo({
                    title: formData.get("title") as string,
                    description: formData.get("description") as string,
                })
                onClose?.()
            }}
                className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <h1>Criar lista de tarefas</h1>
                </div>
                <input type="text" name="title" placeholder="Title" required />
                <textarea name="description" placeholder="Description" />
                <div className="flex justify-between">
                    <button type="submit">Criar Lista</button>
                    <button type="reset" onClick={onClose}>
                        Close
                    </button>
                </div>
            </form>
        </div>
    )
}