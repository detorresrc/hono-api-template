import { createRouter } from "@/lib/create-app";
import { createRoute, z } from "@hono/zod-openapi";
import { jsonContent } from "stoker/openapi/helpers";
import * as HttpStatusCode from "stoker/http-status-codes";

const router = createRouter()
  .openapi(
    createRoute({
      tags: ["Tasks"],
      method: "get",
      path: "/",
      responses: {
        [HttpStatusCode.OK] : jsonContent(
          z.object({
            message: z.string(),
            status: z.boolean(),
            code: z.number()
          }),
          "Tasks API Index"
        )
      }
    }),
    (c) => {
      return c.json({
        message: "Welcome to the Tasks API",
        code: HttpStatusCode.OK,
        status: true
      }, HttpStatusCode.OK)
    });



export default router;