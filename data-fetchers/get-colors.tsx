//For filters
const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async() => {


  const res =await fetch(URL)
  if (res.status !== 200) throw new Error("Error fetching colors")
  const data = await res.json() 
 
  return data
}

export default getColors