import redis from "@/lib/redis"
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct= async(id:string) => {
  if (!id) throw new Error("Id is required")
  const cachedVal = await redis.get(`product:${id}`)
  if (cachedVal) return cachedVal
  const res =await fetch(`${URL}/${id}`)
  if (res.status !== 200) throw new Error("Error fetching product")
  const data =await  res.json()
  await redis.set(`product:${id}`, JSON.stringify(data))
  await redis.expire(`product:${id}`, 60 * 60)
  return data
}

export default getProduct