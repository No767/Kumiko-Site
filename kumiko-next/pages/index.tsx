import type { NextPage } from "next";
import { NavBarMain } from "../shared/shared-components/navbar";
import { MainBody } from "../shared/index-components/body";
import { TheRestOfTheBody } from "../shared/index-components/the-rest-of-the-body";
import { BottomSection } from "../shared/index-components/bottom";
import { IndexFooter } from "../shared/shared-components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <NavBarMain />
      <MainBody />
      <TheRestOfTheBody />
      <BottomSection />
      <IndexFooter />
    </div>
  );
};

export default Home;
