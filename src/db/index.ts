import { createPool } from 'mysql2/promise';
import { Kysely, MysqlDialect } from 'kysely';
// import type { DB } from './schema';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL não está definida no .env');
}

const dialect = new MysqlDialect({
  pool: createPool(connectionString),
});

export const db = new Kysely<any>({ dialect });