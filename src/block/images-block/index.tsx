import { useAppSelector } from "@ui/app/store/hooks";

import ImageDisplay from "@ui/components/image/image-display";
import ImageUpload from "@ui/components/image/image-upload";

import {
  ImagesStyle,
  ImagesHeader,
  ImagesMain,
  DateStyle,
  CountBallStyle,
} from "./index.style";

const ImagesBlock = ({ date }: { date: string }) => {
  const images = useAppSelector((state) => state.images.data.data);
  const selected = useAppSelector((state) => state.images.uploader.selectedFiles);

  const handleCount = () => {
    const count = images[date];
    const select = selected[date];

    if (count && select) {
      return select.length + count.length;
    } else if (select) {
      return select.length;
    } else if (count) {
      return count.length;
    }
  };

  console.log(images);

  return (
    <ImagesStyle>
      <ImagesHeader>
        <DateStyle>{date}</DateStyle>
        <CountBallStyle>{handleCount()}</CountBallStyle>
      </ImagesHeader>
      <ImagesMain>
        {selected[date]?.map((image, index) => (
          <ImageUpload key={index} data={image} />
        ))}
        {images[date]?.map((image) => (
          <ImageDisplay key={image.id} data={image} currentDate={date} />
        ))}
      </ImagesMain>
    </ImagesStyle>
  );
};

export default ImagesBlock;
