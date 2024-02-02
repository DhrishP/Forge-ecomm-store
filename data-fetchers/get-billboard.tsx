const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string) => {
  if (!id) throw new Error("Id is required");
  const res = await fetch(`${URL}/${id}`);
  if (res.status !== 200) throw new Error("Error fetching billboard");
  const data = await res.json();

  return data;
};

export default getBillboard;
