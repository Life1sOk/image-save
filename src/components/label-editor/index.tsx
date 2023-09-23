import { LabelEditorStyle, FakeStyleLabel, Note } from "./index.style";

const LabelEditor = () => {
  return (
    <LabelEditorStyle>
      <FakeStyleLabel>My custom label</FakeStyleLabel>
      <Note>100 chars max</Note>
    </LabelEditorStyle>
  );
};

export default LabelEditor;
