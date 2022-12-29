export const GetBooksData = async () => {
  const res = await fetch("https://fakerapi.it/api/v1/books?_quantity=10");
  const { data } = await res.json();
  return data;
};
