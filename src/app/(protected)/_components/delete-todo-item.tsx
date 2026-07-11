import { Button } from "@/components/ui/button";
import { deleteTodoItem } from "@/server/todos";

type Props = {
    todoItemId: string;
};

export default function DeleteTodoItemButton({ todoItemId }: Props) {
    return (
        <form
            action={async () => {
                await deleteTodoItem({ id: todoItemId });
            }}
        >
            <Button variant="destructive" size="icon">
                🗑️
            </Button>
        </form>
    );
}