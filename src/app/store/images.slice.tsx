"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { formateDate } from "../../../lib/formateDate";

import type {
  IImage,
  IGetData,
  IDeleteImg,
  IEditOpen,
  IReplaceFile,
  ISelectedFile,
} from "@ui/app/type";

interface IImagesState {
  isFetched: boolean;
  data: IGetData;
  editor: {
    isOpen: boolean;
    date: string | null;
    current: IImage | null;
  };
  uploader: {
    selectedFiles: { [key: string]: ISelectedFile[] };
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
    selectedFiles: {},
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

      const mainData = state.data.data[date];
      const selectedData = state.uploader.selectedFiles[date];

      if (mainData) state.data.data[date] = mainData.filter((img) => img.id !== id);

      if (mainData.length < 1 && selectedData.length < 1) {
        state.data.dates = state.data.dates.filter((d) => d !== date);
      }
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
    selectFile: (state, { payload }: PayloadAction<ISelectedFile>) => {
      const { monthYear } = formateDate();

      const findMonth = state.data.dates.find((d) => d === monthYear);

      if (!!!findMonth) {
        state.data.dates.unshift(monthYear);

        state.uploader.selectedFiles[monthYear] = [payload];
        state.data.data[monthYear] = [];
      } else {
        if (state.uploader.selectedFiles[monthYear]) {
          state.uploader.selectedFiles[monthYear].unshift(payload);
        } else {
          state.uploader.selectedFiles[monthYear] = [payload];
        }
      }
    },
    statusSelectFile: (state, { payload }: PayloadAction<IReplaceFile>) => {
      const { id, date } = payload;

      state.uploader.selectedFiles[date] = state.uploader.selectedFiles[date].map(
        (item) => (item.id === id ? { ...item, status: true } : item)
      );
    },
    deleteSelectFile: (state, { payload }: PayloadAction<IReplaceFile>) => {
      const { id, date } = payload;

      const mainData = state.data.data[date];
      const selectedData = state.uploader.selectedFiles[date];

      if (selectedData)
        state.uploader.selectedFiles[date] = selectedData.filter(
          (item) => item.id !== id
        );

      if (mainData.length < 1 && selectedData.length < 1) {
        state.data.dates = state.data.dates.filter((d) => d !== date);
      }
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
  statusSelectFile,
  deleteSelectFile,
} = imagesSlice.actions;

export default imagesSlice.reducer;
