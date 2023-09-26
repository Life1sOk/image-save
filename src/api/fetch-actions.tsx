import axios from "axios";

export async function getData() {
  const res = await fetch("http://localhost:4000/api/images");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function deleteImageApi(id: number) {
  const response = await axios.delete(`http://localhost:4000/api/images/delete?id=${id}`);

  return response;
}

export async function updateImageLabelApi(id: number, title: string) {
  const response = await axios.post(
    `http://localhost:4000/api/images/add-title?id=${id}&title=${title}`
  );

  return response;
}
