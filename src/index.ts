import { serve } from "@hono/node-server";
import app from "@/app";
import AppEnv from "@/env";


const port = Number( AppEnv.PORT || 3000 ); 
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
