const PRODUCT_API_URL = "https://dummyjson.com/products";
const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getProducts() {
  const res = await fetch(`${PRODUCT_API_URL}`);
  if (!res.ok) throw new Error("Failed getting products");
  const data = await res.json();

  return data?.products;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}
