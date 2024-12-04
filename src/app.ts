import createApp from "@/lib/create-app";
import configureOpenAPI from "@/lib/configure-openai";

import index from "@/routes/index.route";
import tasks from "@/routes/tasks/tasks.index";

const app = createApp();

/*
const routes = [
  index,
  tasks
] as const;
configureOpenAPI(app);
routes.forEach(route => app.route("/", route));
export type AppType = typeof routes[number];
*/

configureOpenAPI(app);
const _app = app
  .route("/", index)
  .route("/tasks", tasks);

export type AppType = typeof _app;


export default app;