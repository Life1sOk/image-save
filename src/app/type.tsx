export interface IImage {
  id: number | string;
  title: string | null;
  src: string;
  date: string;
}

export interface IGetData {
  totalCount: number;
  dates: string[];
  data: { [key: string]: IImage[] };
}

export interface IDeleteImg {
  id: number;
  date: string;
}

export interface IEditOpen {
  data: IImage;
  year: string;
  type: "upload" | "display";
  id?: number;
}

export interface ISelectedFile {
  id: string | number;
  title: string | null;
  file: File;
  status: boolean;
}

export interface IReplaceFile {
  id: number | string;
  date: string;
}

export interface IResponseAdd {
  date: string;
  current: IImage;
}

export interface IUpdateFileId {
  oldId: string;
  newId: number;
  date: string;
}
