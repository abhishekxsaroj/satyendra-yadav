import dynamic from "next/dynamic";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";

const Experience = dynamic(() =>
  import("@/sections/Experience").then((m) => m.Experience)
);
const Skills = dynamic(() =>
  import("@/sections/Skills").then((m) => m.Skills)
);
const KPI = dynamic(() => import("@/sections/KPI").then((m) => m.KPI));
const CapabilitiesStrip = dynamic(() =>
  import("@/sections/CapabilitiesStrip").then((m) => m.CapabilitiesStrip)
);
const Certificates = dynamic(() =>
  import("@/sections/Certificates").then((m) => m.Certificates)
);
const Education = dynamic(() =>
  import("@/sections/Education").then((m) => m.Education)
);
const Languages = dynamic(() =>
  import("@/sections/Languages").then((m) => m.Languages)
);
const Contact = dynamic(() =>
  import("@/sections/Contact").then((m) => m.Contact)
);

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CapabilitiesStrip />
      <Experience />
      <KPI />
      <Certificates />
      <Skills />
      <Education />
      <Languages />
      <Contact />
    </>
  );
}
