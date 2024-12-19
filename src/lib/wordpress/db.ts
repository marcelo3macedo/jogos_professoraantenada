import mysql from "mysql2/promise";

class Database {
  private static instance: mysql.Pool;

  private constructor() {}

  public static getPool(): mysql.Pool {
    if (!Database.instance) {
      Database.instance = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionLimit: 10,
        waitForConnections: true,
      });
    }
    return Database.instance;
  }
}

export const queryDatabase = async (query: string, params: any = []) => {
  const connection = await Database.getPool().getConnection();
  try {
    const [rows] = await connection.execute(query, params);
    return rows;
  } catch (error) {
    console.error("Database query failed:", error);
    throw error;
  } finally {
    connection.release();
  }
};
