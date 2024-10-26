export async function getItems(itemType: string) {
  const res = await fetch(`http://localhost:3000/api/items/weapon`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
}
