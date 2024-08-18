import { createConnection } from "mysql2/promise";
import 'dotenv/config';

export const connection = await createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});