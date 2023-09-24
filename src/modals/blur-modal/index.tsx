import { BlurEditorStyle, CloseButton } from "./index.style";

interface IBlurModal {
  block: React.ReactNode | React.ReactNode[];
  isOpen?: boolean;
  closeButton?: React.ReactNode;
}

const BlurModal = (props: IBlurModal) => {
  const { block, isOpen = false, closeButton } = props;

  return (
    <>
      {isOpen && (
        <BlurEditorStyle>
          {block}
          <CloseButton>{closeButton}</CloseButton>
        </BlurEditorStyle>
      )}
    </>
  );
};

export default BlurModal;
