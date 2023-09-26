"use client";

import { ModalWrapper, ModalUploadStyle, UploadWrapper } from "./index-style";

const UploadModal = ({
  data,
  done,
}: {
  data: { kb: string; procent: number };
  done: boolean;
}) => {
  if (done) return <></>;

  return (
    <ModalWrapper>
      <ModalUploadStyle $procent={data?.procent!} />
      <UploadWrapper>
        <h4>Uploading</h4>
        <span>{data.kb}</span>
      </UploadWrapper>
    </ModalWrapper>
  );
};

export default UploadModal;
