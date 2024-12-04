import { hc } from "hono/client"
import { AppType } from "./app"

const client = hc<AppType>("http://localhost:3001");

client.tasks.$get()
  .then(response => {
    response.json()
      .then(data => {
        console.log({data});
      });
  });