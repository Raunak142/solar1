"use client";

import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import AboutFounder from "./AboutFounder";
import AboutDifferentiators from "./AboutDifferentiators";
import AboutMission from "./AboutMission";
import AboutTrust from "./AboutTrust";
import AboutCTA from "./AboutCTA";

const AboutMain = () => {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutIntro />
      <AboutFounder />
      <AboutDifferentiators />
      <AboutMission />
      <AboutTrust />
      <AboutCTA />
    </div>
  );
};

export default AboutMain;
