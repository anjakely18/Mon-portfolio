import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import projectsData from "@/content/projects.json";
const projects = projectsData.projects;
import ProjectsCard from "@/components/ProjectsCard";

/**
 * Carrousel de projets avec défilement automatique toutes les 4 secondes.
 * Utilise Embla Carousel pour la navigation tactile et au clavier.
 * Affiche 1 carte sur mobile, 2 sur tablette, 3 sur desktop.
 *
 * @returns {JSX.Element}
 */
const ProjectsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

  /** Synchronise l'index actif avec la position du carrousel. */
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex -ml-4">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] pl-4"
            >
              <ProjectsCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 bg-bg-second border border-main/30 text-main p-2 rounded-full hover:bg-main hover:text-bg transition-all"
        aria-label="Projet précédent"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 bg-bg-second border border-main/30 text-main p-2 rounded-full hover:bg-main hover:text-bg transition-all"
        aria-label="Projet suivant"
      >
        <FaChevronRight />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "w-6 bg-main" : "w-2 bg-white/30"
            }`}
            aria-label={`Aller au projet ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;
