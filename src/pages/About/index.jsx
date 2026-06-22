import PageHero from "@/components/PageHero";
import Tabs from "@/components/Tabs";
import TimelineTab from "./components/TimelineTab";
import CertificationsTab from "@/components/CertificationsTab";
import ProfilTab from "./components/ProfilTab";
import AnimatedSection from "@/components/AnimatedSection";
import { pageHeroes, formations, experiences, certifications } from "@/assets/data";

const tabs = [
  { id: "formations",     label: "Formations",     content: <TimelineTab items={formations} />           },
  { id: "experiences",    label: "Expériences",    content: <TimelineTab items={experiences} />          },
  { id: "certifications", label: "Certifications", content: <CertificationsTab items={certifications} /> },
  { id: "profil",         label: "Profil",         content: <ProfilTab />                                },
];

const About = () => {
  return (
    <>
      <PageHero {...pageHeroes.about} />
      <AnimatedSection>
        <section className="container py-20 md:py-32">
          <Tabs tabs={tabs} />
        </section>
      </AnimatedSection>
    </>
  );
};

export default About;
