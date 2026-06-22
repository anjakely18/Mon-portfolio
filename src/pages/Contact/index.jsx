import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { pageHeroes } from "@/assets/data";

const Contact = () => {
  return (
    <>
      <PageHero {...pageHeroes.contact} />
      <AnimatedSection>
        <section className="container py-20 md:py-32">
          {/* contenu à venir */}
        </section>
      </AnimatedSection>
    </>
  );
};

export default Contact;
