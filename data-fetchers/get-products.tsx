import qs from "query-string";
import redis from "@/lib/redis";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type queryprops = {
  CategoriesId?: string;
  colorId?: string;
  sizesId?: string;
  Featured?: boolean;
};

const getProducts = async (query: queryprops) => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizesId: query.sizesId,
      CategoriesId: query.CategoriesId,
      Featured: query.Featured,
    },
  });
  const cachedVal = await redis.get(url);
  if (cachedVal) return cachedVal;

  const res = await fetch(url);
  if (res.status !== 200) throw new Error("Error fetching products");
  const data = await res.json();
  await redis.set(url, JSON.stringify(data));
  await redis.expire(url, 60 * 60);
  return data
};

export default getProducts;
