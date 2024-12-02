import { OpenAPIHono } from "@hono/zod-openapi";
import { PinoLogger, pinoLogger } from "hono-pino";
import { requestId } from "hono/request-id";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import AppEnv from "@/env.js";
import type { AppBindings } from "./types.js";
import defaultHook from "stoker/openapi/default-hook";

const isProduction = process.env.NODE_ENV === 'production';

export const createRouter = () => {
  const app = new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook
  });

  return app;
};

const createApp = () => {
  const app = createRouter();

  app.use(serveEmojiFavicon("📝"));
  app.use(requestId());
  app.use(pinoLogger({
    pino: {
      transport: isProduction ? undefined : {
        target: 'pino-pretty',
        options: {
          colorize: true
        }
      },
      level: AppEnv.LOG_LEVEL || 'info'
    }
  }));

  app.notFound(notFound);
  app.onError(onError);

  return app;
}


export default createApp;