"use client";

import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "@ui/app/store/hooks";
import { fetchError } from "@ui/app/store/images.slice";

import { StatusModalStyle, Title, Text } from "./index.style";

const StatusModal = () => {
  const dispatch = useAppDispatch();

  const isError = useAppSelector((state) => state.images.isError);

  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => {
        dispatch(fetchError(false));
      }, 3000);

      return clearTimeout(timer);
    }
  }, [isError]);

  return (
    <StatusModalStyle $isError={isError}>
      <Title>Sorry, but</Title>
      <Text>
        Something really bad happened while uploading your image, please try again
      </Text>
    </StatusModalStyle>
  );
};

export default StatusModal;
