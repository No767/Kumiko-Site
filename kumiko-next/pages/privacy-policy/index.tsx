import type { NextPage } from "next";
import { NavBarMain } from "../../shared/shared-components/navbar";
import { PrivacyPolicyBody } from "../../shared/privacy-policy-components/body";
import { IndexFooter } from "../../shared/shared-components/footer";

const PrivacyPolicy: NextPage = () => {
  return (
    <div>
      <NavBarMain />
      <PrivacyPolicyBody />
      <IndexFooter />
    </div>
  );
};

export default PrivacyPolicy;
