import * as dotenv from 'dotenv';

dotenv.config();
const {
  DB_TYPE,
  DB_DATABASE_NAME,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
} = process.env;

export const DatabaseConfig = {
  type: DB_TYPE,
  database: DB_DATABASE_NAME,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
};
