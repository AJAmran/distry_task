import React from "react";

import HeroSection from "@/components/UI/HeroSection";
import FinanceHeroSection from "@/components/UI/FinanceHeroSection";
import InnovationSection from "@/components/UI/InnovationSection";
import FinanceSlider from "@/components/UI/FinanceSlider";
import AnimatedStats from "@/components/UI/AnimatedStates";
import ClientLogo from "@/components/UI/ClientLogo";
import LegacyHeroSection from "@/components/UI/LegacyNolonger";


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
