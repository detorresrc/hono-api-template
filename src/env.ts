import { z, ZodError } from 'zod';
import { config } from "dotenv";
import { expand } from "dotenv-expand";

expand(config());

const EnvSchema = z.object({
  NODE_ENV: z.string().default('development'),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"]),
  PORT: z.coerce.number().default(3001)
});

export type AppEnv = z.infer<typeof EnvSchema>;
let env: AppEnv;
try {
  env = EnvSchema.parse(process.env);
}catch(e){
  const error = e as ZodError;

  console.error("❌ Invalid env:");
  console.error(error.flatten().fieldErrors);
  process.exit(1);
}

export default env!;