//For getting the billboard in the categories page
import redis from "@/lib/redis"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async(id:string) => {
  if (!id) throw new Error("Id is required")
  const cachedVal = await redis.get(`category:${id}`)
  if (cachedVal) return cachedVal
  const res =await fetch(`${URL}/${id}`)
  if (res.status !== 200) throw new Error("Error fetching category")
  const data = await res.json()
console.log(data)
  await redis.set(`category:${id}`, JSON.stringify(data))
  await redis.expire(`category:${id}`, 60 * 60)
  return data
}

export default getCategory