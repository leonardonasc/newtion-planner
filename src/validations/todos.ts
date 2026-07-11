import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
});

export const createTodoItemSchema = z.object({
  content: z.string().min(1, "Content is required"),
  todoId: z.string().uuid("Invalid todo ID"),
});

export const deleteTodoSchema = z.object({
  id: z.string().uuid("Invalid todo ID"),
});

export const deleteTodoItemSchema = z.object({
  id: z.string().uuid("Invalid todo item ID"),
});

export const updateTodoItemSchema = z.object({
  id: z.string().uuid("Invalid todo item ID"),
  content: z.string().min(1, "Content is required").optional(),
  completed: z.boolean().optional(),
});

export const toggleTodoItemSchema = z.object({
  id: z.string().uuid("Invalid todo item ID"),
  completed: z.boolean(),
});

export const todoSortSchema = z.enum(["title", "createdAt"]);


