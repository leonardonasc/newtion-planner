
import { Button } from '@/components/ui/button'
import { createTodoItem } from '@/server/todos'

type Props = {
    todoId: string
}

export default function CreateTaskButton({ todoId }: Props) {
    return (
        <form action={async (formData) => {
            await createTodoItem({
                content: formData.get("content") as string,
                todoId,
            })
        }}
            className="flex flex-col gap-2">
            <div className="flex justify-between gap-x-2">
                <input type="text" name="content" placeholder="Content" className='flex-1 border rounded-md p-1' required />
                <Button variant="outline" type="submit">
                    Criar Tarefa
                </Button>
            </div>
        </form>
    )
}
