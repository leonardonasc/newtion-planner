CREATE TABLE "expenses_control" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"monthly_amount" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "todo" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "expenses_control" ADD CONSTRAINT "expenses_control_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "todo_userId_idx" ON "todo" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "todo_item_todoId_idx" ON "todo_item" USING btree ("todo_id");