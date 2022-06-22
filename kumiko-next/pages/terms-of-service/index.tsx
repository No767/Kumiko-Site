import type { NextPage } from "next";
import { NavBarMain } from "../../shared/shared-components/navbar";
import { TOSBody } from "../../shared/tos-components/body";
import { IndexFooter } from "../../shared/shared-components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <NavBarMain />
      <TOSBody />
      <IndexFooter />
    </div>
  );
};

export default Home;
