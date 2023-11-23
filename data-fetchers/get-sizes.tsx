import redis from "@/lib/redis"
const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async() => {
  const cachedVal = await redis.get(`sizes`)
  if (cachedVal) return cachedVal
  const res =await fetch(URL)
  const data = await res.json()
  if (res.status !== 200) throw new Error("Error fetching sizes")
  
  await redis.set(`sizes`, JSON.stringify(data))
  await redis.expire(`sizes`, 60 * 60)
  return data
}

export default getSizes