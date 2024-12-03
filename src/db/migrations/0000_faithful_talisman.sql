CREATE TABLE IF NOT EXISTS "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"done" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
