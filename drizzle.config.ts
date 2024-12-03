import { defineConfig } from 'drizzle-kit';

import AppEnv from "@/env";

export default defineConfig({
  out: './src/db/migrations',
  schema: "./src/db/schema/*",
  dialect: 'postgresql',
  dbCredentials: {
    url: AppEnv.DATABASE_URL!,
  },
});