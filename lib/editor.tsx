"use client";

import { createContext, useState } from "react";

import type { IImage } from "@ui/app/page";

const initialState: {
  current: null | IImage;
  action: ((data: IImage | null) => void) | null;
} = {
  current: null,
  action: null,
};

export const EditorContext = createContext(initialState);

function EditorContextWrapper({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [current, setCurrent] = useState<IImage | null>(null);

  const handleChange = (data: IImage | null): void => setCurrent(data);

  return (
    <EditorContext.Provider value={{ current, action: handleChange }}>
      {children}
    </EditorContext.Provider>
  );
}

export default EditorContextWrapper;
