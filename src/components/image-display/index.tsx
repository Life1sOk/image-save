import ImageDisplay from "./image-display";
import ImageUpload from "./image-upload";

import { IImage } from "@ui/app/type";

const ImageController = ({ data }: { data: IImage | Blob }) => {
  return <>{"id" in data ? <ImageDisplay data={data} /> : <ImageUpload blob={data} />}</>;
};

export default ImageController;
