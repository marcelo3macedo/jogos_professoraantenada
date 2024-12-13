import Redis from "ioredis";

export const redis = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: parseInt(process.env.REDIS_PORT || "6379"),
  password: process.env.REDIS_PASSWORD || undefined,
});

export async function cacheData<T>(
  cacheKey: string,
  fetchData: () => Promise<T>,
  ttl: number = 3600,
): Promise<T> {
  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const data = await fetchData();

  await redis.setex(cacheKey, ttl, JSON.stringify(data));

  return data;
}
