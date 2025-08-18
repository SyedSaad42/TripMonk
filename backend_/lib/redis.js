import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();



export const redis = new Redis(process.env.REDIS_API|| "rediss://localhost:6379");
redis.on("error", (err) => {
  console.error("Redis Error:", err);
 
});