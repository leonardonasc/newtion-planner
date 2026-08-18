import { z } from "zod";

export const createNoteSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().optional(),
    tag: z.string().optional()
});

export const deleteNoteSchema = z.object({
    id: z.string().uuid("Invalid note ID"),
});

export const updateNoteSchema = z.object({
    id: z.string().uuid("Invalid note ID"),
    title: z.string().min(1, "Title is required").optional(),
    content: z.string().optional(),
    tag: z.string().min(1, "Tag is required").optional(),
});

export const noteSortSchema = z.enum(["title", "createdAt"]);