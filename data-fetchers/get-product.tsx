
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct= async(id:string) => {
  if (!id) throw new Error("Id is required")
  const res =await fetch(`${URL}/${id}`)
  if (res.status !== 200) throw new Error("Error fetching product")
  const data =await  res.json()
  return data
}

export default getProduct