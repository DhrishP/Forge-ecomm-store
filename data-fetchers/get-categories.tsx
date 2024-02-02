const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  if (res.status !== 200) throw new Error("Error fetching categories");
  const data = await res.json();
  return data;
};

export default getCategories;
