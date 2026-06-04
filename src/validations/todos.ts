export type Todo = {
  id: string;
  title: string;
  userId: string;
  todoItems: TodoItems[];
  createdAt: Date;
  updatedAt: Date;
};

export type TodoItems = {
  id: string;
  content: string;
  completed: boolean;
  position: number;
  todoId: string;
};
