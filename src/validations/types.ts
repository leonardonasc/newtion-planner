import { todo } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type Todo = InferSelectModel<typeof todo>;