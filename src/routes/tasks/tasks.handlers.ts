import { AppRouteHandler } from "@/lib/types";
import { ListRoute } from "@/routes/tasks/tasks.routes";

export const list: AppRouteHandler<ListRoute> = (c) => {
    c.var.logger.info("Listing tasks");

    return c.json([
        {
            name: "Task 1",
            done: false
        },
        {
            name: "Task 2",
            done: true
        }
    ]);
}