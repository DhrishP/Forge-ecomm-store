
const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async() => {

  const res =await fetch(URL)
  const data = await res.json()
  if (res.status !== 200) throw new Error("Error fetching sizes")

  return data
}

export default getSizes