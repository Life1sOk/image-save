import "../styles/global.css";

import Header from "@ui/sections/header";
import Main from "@ui/sections/main";
import DropWrapper from "@ui/sections/drop";
import StatusModal from "@ui/modals/status-modal";

const Home = async () => {
  return (
    <div>
      <Header />
      <Main />
      <DropWrapper />
      <StatusModal />
    </div>
  );
};

export default Home;
