//For filters
import redis from "@/lib/redis"
const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async() => {
  const cachedVal = await redis.get(`colors`)
  if (cachedVal) return cachedVal

  const res =await fetch(URL)
  if (res.status !== 200) throw new Error("Error fetching colors")
  const data = await res.json() 
  await redis.set(`colors`, JSON.stringify(data))
  await redis.expire(`colors`, 60 * 60)
  return data
}

export default getColors