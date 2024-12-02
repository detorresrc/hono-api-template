import type { AppOpenAPI } from "@/lib/types.js";
import { apiReference } from "@scalar/hono-api-reference";

import packageJSON from "../../package.json" assert { type: "json" };

const configureOpenAPI = (app: AppOpenAPI) => {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: packageJSON.version
    }
  });

  app.get(
    "/reference",
    apiReference({
      theme: "kepler",
      layout: "classic",
      spec: {
        url: "/doc"
      }
    })
  );
}

export default configureOpenAPI;