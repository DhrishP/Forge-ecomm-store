//For getting the billboard in the categories page

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async(id:string) => {
  const res =await fetch(`${URL}/${id}`)
  return res.json()
}

export default getCategory