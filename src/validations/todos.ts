import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

export const updateTodoSchema = z.object({
  id: z.string().min(1, "ID is required"),
  title: z.string().min(1, "Title is required").optional(),
});

export const deleteTodoSchema = z.object({
  id: z.string().min(1, "ID is required"),
});

export const createTodoItemSchema = z.object({
  content: z.string().min(1, "Content is required"),
  todoId: z.string().min(1, "Todo ID is required"),
  completed: z.boolean().default(false),
});

export const updateTodoItemSchema = z.object({
  id: z.string().min(1, "ID is required"),
  content: z.string().min(1, "Content is required").optional(),
  completed: z.boolean().optional(),
});

export const reorderTodoItemsSchema = z.object({
  todoId: z.string().min(1, "Todo ID is required"),
  items: z.array(
    z.object({
      id: z.string().min(1, "ID is required"),
      position: z.number().int().nonnegative(),
    }),
  ),
});