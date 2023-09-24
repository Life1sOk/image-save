import {
  forwardRef,
  useRef,
  useImperativeHandle,
  RefObject,
  useState,
  ChangeEvent,
} from "react";

import { useAppSelector } from "@ui/app/store/hooks";

import { LabelEditorStyle, LabelStyle, Note } from "./index.style";

const LabelEditor = forwardRef((_, ref) => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);
  const currentValue = useAppSelector((state) => state.images.editor.current?.title);

  const [countLength, setCountLength] = useState(100);

  const handleCount = (e: ChangeEvent<HTMLInputElement>) => {
    setCountLength(100 - e.target.value.length);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        value() {
          return inputRef.current?.value;
        },
      };
    },
    []
  );

  return (
    <LabelEditorStyle>
      <LabelStyle
        ref={inputRef}
        defaultValue={currentValue ? currentValue : ""}
        placeholder="Enter custom label"
        maxLength={100}
        onChange={(e) => handleCount(e)}
      />
      <Note>{countLength} chars max</Note>
    </LabelEditorStyle>
  );
});

export default LabelEditor;
