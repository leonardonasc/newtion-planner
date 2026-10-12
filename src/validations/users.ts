import { session, user } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type User = InferSelectModel<typeof user>;
export type Session = InferSelectModel<typeof session>;