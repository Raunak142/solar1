"use client";

import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import AboutFounder from "./AboutFounder";
import AboutTeam from "./AboutTeam";
import AboutDifferentiators from "./AboutDifferentiators";
import AboutMission from "./AboutMission";
import AboutTrust from "./AboutTrust";
import AboutCTA from "./AboutCTA";
import type { SanityAboutPage } from "@/lib/sanity-types";

interface AboutMainProps {
  data?: SanityAboutPage | null;
}

const AboutMain = ({ data }: AboutMainProps) => {
  return (
    <div className="page-bg">
      <AboutHero data={data?.heroSection} />
      <AboutIntro data={data?.introSection} />
      <AboutFounder data={data?.founderSection} />
      <AboutTeam />
      <AboutDifferentiators data={data?.differentiatorsSection} />
      <AboutMission data={data?.missionVisionSection} />
      <AboutTrust data={data?.trustSection} />
      <AboutCTA data={data?.ctaSection} />
    </div>
  );
};

export default AboutMain;
