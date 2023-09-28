import axios from "axios";

import Image from "next/image";
import { useEffect } from "react";

import { useAppDispatch } from "@ui/app/store/hooks";
import { statusSelectFile } from "@ui/app/store/images.slice";
import { editImage, deleteSelectFile } from "@ui/app/store/images.slice";

import { useFetchAction } from "@ui/api/fetch-actions";

import downloadSVG from "../../../public/download.svg";
import editSVG from "../../../public/edit.svg";
import deleteSVG from "../../../public/delete.svg";

import FeatureModal from "@ui/modals/image-modal/feature.modal";
import FeatureButton from "../feature-button";

import { formateDate } from "../../../lib/formateDate";
import { useUploading } from "./useUploading";

import UploadModal from "@ui/modals/image-modal/upload.modal";

import type { ISelectedFile, IResponseAdd } from "@ui/app/type";

import { ImageDisplayStyle, ImageWrapper, InfoWrapper } from "./index.style";

interface IImgUpload {
  data: ISelectedFile;
}

const ImageUpload = ({ data }: IImgUpload) => {
  const dispatch = useAppDispatch();

  const { deleteImageApi } = useFetchAction();
  const { dayMonth } = formateDate();
  const { preview, progress, respData } = useUploading(data.file, data.status);

  const wichInfo = data.title == null ? dayMonth : data.title;

  // Dispath delete from upload files
  const handleEdit = () => {
    if (respData !== null)
      dispatch(
        editImage({
          data: respData.current,
          customId: data.id,
          year: respData.date,
          type: "upload",
        })
      );
  };

  const handleDelete = async () => {
    dispatch(deleteSelectFile({ id: data.id, date: respData?.date! }));

    if (respData !== null) await deleteImageApi(Number(respData.current.id));
  };

  useEffect(() => {
    if (respData !== null) {
      dispatch(statusSelectFile({ id: data.id, date: respData.date }));
    }
  }, [respData]);

  return (
    <ImageDisplayStyle>
      <ImageWrapper>
        {preview && (
          <Image
            width={0}
            height={0}
            style={{ width: "100%", height: "200px" }}
            sizes="100vw"
            alt="Some image"
            src={preview}
            priority
          />
        )}
      </ImageWrapper>
      <InfoWrapper>{wichInfo}</InfoWrapper>
      <UploadModal data={progress} done={data.status} />
      {data.status && (
        <FeatureModal
          features={[
            <FeatureButton key={"Download"} title="Download" icon={downloadSVG} />,
            <FeatureButton
              key={"Edit label"}
              title="Edit label"
              icon={editSVG}
              action={handleEdit}
            />,
            <FeatureButton
              key={"Delete"}
              title="Delete"
              icon={deleteSVG}
              action={handleDelete}
            />,
          ]}
        />
      )}
    </ImageDisplayStyle>
  );
};

export default ImageUpload;
