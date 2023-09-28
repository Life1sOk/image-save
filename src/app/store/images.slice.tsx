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
  isError: boolean;
  data: IGetData;
  editor: {
    isOpen: boolean;
    date: string | null;
    customId: string | null;
    current: IImage | null;
    type: "upload" | "display";
  };
  uploader: {
    isOpen: boolean;
    selectedFiles: { [key: string]: ISelectedFile[] };
  };
}

const initialState: IImagesState = {
  isFetched: false,
  isError: false,
  data: {
    totalCount: 0,
    dates: [],
    data: {},
  },
  editor: {
    isOpen: false,
    date: null,
    current: null,
    customId: null,
    type: "display",
  },
  uploader: {
    isOpen: false,
    selectedFiles: {},
  },
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, { payload }: PayloadAction<IGetData>) => {
      state.data = payload;

      if (payload.totalCount < 1) state.uploader.isOpen = true;
    },
    fetchDone: (state, { payload }: PayloadAction<boolean>) => {
      state.isFetched = payload;
    },
    fetchError: (state, { payload }: PayloadAction<boolean>) => {
      state.isError = payload;
    },
    changeLabel: (state, { payload }: PayloadAction<string>) => {
      const currentId = state.editor.current?.id!;
      const customId = state.editor?.customId!;
      const currentDate = state.editor.date!;
      const type = state.editor.type;

      if (type === "display") {
        state.data.data[currentDate] = state.data.data[currentDate].map((img) =>
          img.id === currentId ? { ...img, title: payload } : img
        );
      }

      if (type === "upload") {
        state.uploader.selectedFiles[currentDate] = state.uploader.selectedFiles[
          currentDate
        ].map((img) => (img.id === customId ? { ...img, title: payload } : img));
      }

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

      if (state.data.totalCount === 1) {
        state.data.totalCount--;
        state.uploader.isOpen = true;
      } else {
        state.data.totalCount--;
      }
    },
    // Editor
    editImage: (state, { payload }: PayloadAction<IEditOpen>) => {
      const { year, data, type, customId } = payload;

      state.editor.current = data;
      state.editor.date = year;
      state.editor.isOpen = true;

      state.editor.type = type;
      if (customId) state.editor.customId = customId;
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

      state.uploader.isOpen = false;
    },
    statusSelectFile: (state, { payload }: PayloadAction<IReplaceFile>) => {
      const { id, date } = payload;

      state.uploader.selectedFiles[date] = state.uploader.selectedFiles[date].map(
        (item) => (item.id === id ? { ...item, status: true } : item)
      );

      state.data.totalCount++;
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

      if (state.data.totalCount === 1) {
        state.data.totalCount--;
        state.uploader.isOpen = true;
      } else {
        state.data.totalCount--;
      }
    },
  },
});

export const {
  setImages,
  fetchDone,
  fetchError,
  editImage,
  closeEditor,
  changeLabel,
  deleteImage,
  selectFile,
  statusSelectFile,
  deleteSelectFile,
} = imagesSlice.actions;

export default imagesSlice.reducer;
