import * as z from "zod";

export const TaskSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
});

export const TaskStateSchema = z.object({
    todos: z.array(TaskSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number(),
});