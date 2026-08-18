"use server";

import { auth } from "@/lib/auth";
import { db } from "@/db/drizzle";
import { note } from "@/db/schema";

import {
    createNoteSchema,
    deleteNoteSchema,
    noteSortSchema,
    updateNoteSchema,
} from "@/validations/notes";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

import { eq, asc, desc } from "drizzle-orm";
type SortOption = "title" | "createdAt";

const getSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        throw new Error("Unauthorized");
    }
    return session;
};

export const createNote = async (data: {
    title: string;
    content?: string;
    tag?: string;
}) => {
    const user = await getSession();
    const parsed = createNoteSchema.parse(data);

    const [newNote] = await db
        .insert(note)
        .values({
            id: crypto.randomUUID(),
            title: parsed.title,
            content: data.content ?? null,
            tag: data.tag,
            userId: user.user.id,
        })
        .returning();

    revalidatePath("/notes");
    return { success: true, note: newNote };
};

export const getNotes = async (sortBy: SortOption = "createdAt") => {
    const user = await getSession();
    const parsedSort = noteSortSchema.parse(sortBy);

    const notes = await db.select().from(note).where(
        eq(note.userId, user.user.id)
    ).orderBy(
        parsedSort === "title" ? asc(note.title) : desc(note.createdAt)
    );

    return notes;
}