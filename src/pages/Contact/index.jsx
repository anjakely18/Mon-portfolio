import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "./components/ContactForm";
import { pageHeroes } from "@/assets/data";

const Contact = () => {
  return (
    <>
      <PageHero {...pageHeroes.contact} />
      <AnimatedSection>
        <section className="container py-20 md:py-32">
          <div className="max-w-2xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="font-title font-bold text-h2">Travaillons ensemble</h2>
              <p className="text-body text-white/60">
                Un projet, une opportunité, une question ? Je suis disponible et réponds rapidement.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default Contact;
