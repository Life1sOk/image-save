export interface IImage {
  id: number;
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
  date: string;
}
