import redis from "@/lib/redis";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const cachedVal: Category[] | null = await redis.get(`categories`);
  if (cachedVal) return cachedVal;
  const res = await fetch(URL);
  if (res.status !== 200) throw new Error("Error fetching categories");
  const data = await res.json();
  await redis.set(`categories`, JSON.stringify(data));
  await redis.expire(`categories`, 60 * 60);
  return data
};

export default getCategories;
