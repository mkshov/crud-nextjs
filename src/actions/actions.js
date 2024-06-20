import axios from "axios";

export const API = "http://localhost:8000/products";

export async function getProducts() {
  let response = await fetch(API, { cache: "no-store" });
  let data = await response.json();
  return data;
}

export async function getOneProduct(id) {
  let response = await fetch(`${API}/${id}`, { cache: "no-store" });
  let data = await response.json();
  return data;
}

export async function deleteProduct(id) {
  await axios.delete(`${API}/${id}`);
}

export async function editProduct(id, product) {
  await axios.patch(`${API}/${id}`, product);
}
