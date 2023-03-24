import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.MYSQL_HOST || "localhost";
export const DB_USER = process.env.MYSQL_USER || "root";
export const DB_PASSWORD = process.env.MYSQL_PASSWORD || "";
export const DB_DATABASE = process.env.MYSQL_DATABASE || "example-db";
export const DB_PORT = process.env.MYSQL_PORT || 3306;