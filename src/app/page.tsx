import "../styles/global.css";

import Header from "@ui/sections/header";
import ImageBlock from "@ui/sections/image-block";
import ImageEditor from "@ui/modals/image-editor";

import EditorContextWrapper from "../../lib/editor";

export interface IImage {
  id: number;
  title: string | null;
  src: string;
  date: string;
}

interface IGetData {
  totalCount: number;
  dates: string[];
  data: { [key: string]: IImage[] };
}

async function getData() {
  const res = await fetch("http://localhost:4000/api/images");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const { totalCount, dates, data }: IGetData = await getData();

  return (
    <div>
      <Header totalCount={totalCount} />
      <EditorContextWrapper>
        {dates.map((currentData) => (
          <ImageBlock key={currentData} images={data[currentData]} date={currentData} />
        ))}
        <ImageEditor />
      </EditorContextWrapper>
    </div>
  );
};

export default Home;
