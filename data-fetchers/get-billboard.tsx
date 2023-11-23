import redis from "@/lib/redis";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string) => {
  if (!id) throw new Error("Id is required");
  const cachedVal = await redis.get(`billboard:${id}`);
  if (cachedVal) return cachedVal;
  const res = await fetch(`${URL}/${id}`);
  if (res.status !== 200) throw new Error("Error fetching billboard");
  const data= await  res.json()
  await redis.set(`billboard:${id}`, JSON.stringify(data));
  await redis.expire(`billboard:${id}`, 60 * 60);
  return data;
};

export default getBillboard;
