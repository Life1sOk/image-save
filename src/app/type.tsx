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
  customId?: string;
}

export interface ISelectedFile {
  id: string;
  title: string | null;
  file: File;
  status: boolean;
}

export interface IReplaceFile {
  id: string;
  date: string;
}

export interface IResponseAdd {
  date: string;
  current: IImage;
}
