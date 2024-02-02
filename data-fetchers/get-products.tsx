import qs from "query-string";

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

  const res = await fetch(url);
  if (res.status !== 200) throw new Error("Error fetching products");
  const data = await res.json();
  return data;
};

export default getProducts;
