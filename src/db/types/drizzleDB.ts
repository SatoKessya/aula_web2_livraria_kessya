import { drizzle } from 'drizzle-orm/node-mssql';
import * as schema from '../schemas/index';

export type DrizzleDB = ReturnType<typeof drizzle<typeof schema>>;
