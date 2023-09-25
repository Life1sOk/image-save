"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import type { IResponseAdd } from "@ui/app/type";

export const useUploading = (data: File, status: boolean) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [respData, setRespData] = useState<IResponseAdd | null>(null);
  const [progress, setProgress] = useState({ kb: "", procent: 0 });

  const sendImage = async () => {
    const fd = new FormData();
    fd.append("img", data, "img");

    const response = await axios.post("http://localhost:4000/api/images/add", fd, {
      onUploadProgress(progressEvent) {
        const total = Math.floor(progressEvent.total! / 1000);
        const current = Math.floor(progressEvent.loaded! / 1000);

        const prep = {
          kb: `${current}kb of ${total}`,
          procent: (current * 100) / total,
        };

        setProgress(prep);
      },
    });

    setRespData(response.data);
  };

  useEffect(() => {
    if (!data) {
      return setPreview(null);
    }

    const objectUrl = URL.createObjectURL(data);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [data]);

  useEffect(() => {
    if (data && !status) sendImage();
  }, [data, status]);

  return {
    preview,
    progress,
    respData,
  };
};
