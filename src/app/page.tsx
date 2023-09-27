import "../styles/global.css";

import Header from "@ui/sections/header";
import Main from "@ui/sections/main";
import DropWrapper from "@ui/sections/drop";

const Home = async () => {
  return (
    <div>
      <Header />
      <Main />
      <DropWrapper />
    </div>
  );
};

export default Home;
