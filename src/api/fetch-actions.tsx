import axios from "axios";

import { useAppDispatch } from "@ui/app/store/hooks";
import { fetchError } from "@ui/app/store/images.slice";

export const useFetchAction = () => {
  const disatch = useAppDispatch();

  async function getData() {
    const res = await fetch("http://localhost:4000/api/images");

    if (!res.ok) disatch(fetchError(true));

    return res.json();
  }

  async function deleteImageApi(id: number) {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/images/delete?id=${id}`
      );

      return response;
    } catch (err) {
      if (err) disatch(fetchError(true));
    }
  }

  async function updateImageLabelApi(id: number, title: string) {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/images/add-title?id=${id}&title=${title}`
      );

      return response;
    } catch (err) {
      if (err) disatch(fetchError(true));
    }
  }

  return {
    getData,
    deleteImageApi,
    updateImageLabelApi,
  };
};
