import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import AppEnv from "@/env";

import * as schema from '@/db/schema/index.schema';

export const postgresClient = postgres(AppEnv.DATABASE_URL!);
export const db = drizzle({ 
    client: postgresClient, 
    schema 
});