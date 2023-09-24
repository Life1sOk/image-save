"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IImage, IGetData, IDeleteImg, IEditOpen } from "@ui/app/type";

interface IImagesState {
  isFetched: boolean;
  data: IGetData;
  editor: {
    isOpen: boolean;
    date: string | null;
    current: IImage | null;
  };
  uploader: {
    selectedFiles: Blob[];
  };
}

const initialState: IImagesState = {
  isFetched: false,
  data: {
    totalCount: 0,
    dates: [],
    data: {},
  },
  editor: {
    isOpen: false,
    date: null,
    current: null,
  },
  uploader: {
    selectedFiles: [],
  },
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, { payload }: PayloadAction<IGetData>) => {
      state.data = payload;
    },
    fetchDone: (state, { payload }: PayloadAction<boolean>) => {
      state.isFetched = payload;
    },
    changeLabel: (state, { payload }: PayloadAction<string>) => {
      const currentId = state.editor.current?.id!;
      const currentDate = state.editor.date!;

      state.data.data[currentDate] = state.data.data[currentDate].map((img) =>
        img.id === currentId ? { ...img, title: payload } : img
      );

      state.editor.isOpen = false;
    },
    deleteImage: (state, { payload }: PayloadAction<IDeleteImg>) => {
      const { id, date } = payload;
      state.data.data[date] = state.data.data[date].filter((img) => img.id !== id);
    },
    // Editor
    editImage: (state, { payload }: PayloadAction<IEditOpen>) => {
      const { date, data } = payload;

      state.editor.current = data;
      state.editor.date = date;
      state.editor.isOpen = true;
    },
    closeEditor: (state) => {
      state.editor.isOpen = false;
      state.editor.date = null;
      state.editor.current = null;
    },
    // Uploader
    selectFile: (state, { payload }: PayloadAction<{ file: Blob }>) => {
      state.uploader.selectedFiles.unshift(payload.file);
    },
  },
});

export const {
  setImages,
  fetchDone,
  editImage,
  closeEditor,
  changeLabel,
  deleteImage,
  selectFile,
} = imagesSlice.actions;

export default imagesSlice.reducer;
