//For getting the billboard in the categories page

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string) => {
  if (!id) throw new Error("Id is required");
  const res = await fetch(`${URL}/${id}`);
  if (res.status !== 200) throw new Error("Error fetching category");
  const data = await res.json();
  return data;
};

export default getCategory;
