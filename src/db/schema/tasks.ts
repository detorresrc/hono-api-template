import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from "zod";

import { db } from "@/db";
import { eq } from "drizzle-orm";

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  name: text("name")
    .notNull(),
  done: boolean("done")
    .default(false),
  createdAt: timestamp("created_at")
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
});

export const selectTasksSchema = createSelectSchema(tasks);

export const insertTasksSchema = createInsertSchema(
  tasks,
  {
    name: z.string().min(1).max(500)
    /*.refine(async (name) => {
      const task = await db
        .query
        .tasks
        .findFirst({
          where: eq(tasks.name, name)
        });

      if(!task) return true;

      return false;
    }, { message: "Task already exists" }),
    */
  },
).required({
  done: true,
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const patchTasksSchema = insertTasksSchema.partial();