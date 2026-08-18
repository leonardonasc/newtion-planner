import { note, todo } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type Todo = InferSelectModel<typeof todo>;
export type Note = InferSelectModel<typeof note>;