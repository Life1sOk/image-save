import "../styles/global.css";

import Header from "@ui/sections/header";
import Main from "@ui/sections/main";
import DropWrapper from "@ui/sections/drop";

const Home = async () => {
  return (
    <DropWrapper>
      <Header />
      <Main />
    </DropWrapper>
  );
};

export default Home;
