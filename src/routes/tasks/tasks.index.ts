import { createRouter } from "@/lib/create-app";

import * as handlers from "./tasks.handlers";
import { list } from "@/routes/tasks/tasks.routes";

const router = createRouter()
  .openapi(list, handlers.list);

export default router;