import React from "react";
import HeroSection from "./component/UI/HeroSection";
import FinanceHeroSection from "./component/UI/FinanceHeroSection";
import InnovationSection from "./component/UI/InnovationSection";
import FinanceSlider from "./component/UI/FinanceSlider";
import AnimatedStats from "./component/UI/AnimatedStates";
import ClientLogo from "./component/UI/ClientLogo";
import LegacyHeroSection from "./component/UI/LegacyNolonger";


const page = () => {
  return (
    <>
      <HeroSection />
      <FinanceHeroSection />
      <InnovationSection />
      <FinanceSlider />
      <AnimatedStats  />
      <ClientLogo />
      <LegacyHeroSection />
    </>
  );
};

export default page;
