import qs from 'query-string'
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

type queryprops = {
    CategoriesId? : string,
    colorId? : string,
    sizesId? : string,
    isFeatured? : boolean,
}

const getProducts = async(query:queryprops) => {
    const url = qs.stringifyUrl({
        url:URL,
        query:{
            colorId:query.colorId,
            sizesId:query.sizesId,
            CategoriesId:query.CategoriesId,
            isFeatured:query.isFeatured,
        }
    })

  const res =await fetch(URL)
  return res.json()
}

export default getProducts