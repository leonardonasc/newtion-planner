import { Checkbox } from '@/components/ui/checkbox'
import { TodoItems } from '@/validations/todos'

interface TodoItemsListProps {
    todoItems: TodoItems[]
}

export default function TodoItemsList({ todoItems }: TodoItemsListProps) {

    return (
        <div className="flex flex-col gap-y-3 border-primary p-4">
            {todoItems.length === 0 ? (
                <p className="text-muted-foreground">
                    No todo items found.
                </p>
            ) : (
                todoItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-x-3">
                        <h2 className="bg-secondary w-full text-secondary-foreground">
                            {item.content}
                        </h2>
                        <Checkbox checked={item.completed} />
                    </div>
                ))
            )}
        </div>
    )
}
