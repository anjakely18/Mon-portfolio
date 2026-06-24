import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FiExternalLink, FiGithub, FiArrowLeft, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import projectsData from "@/content/projects.json";
import AnimatedSection from "@/components/AnimatedSection";

const Gallery = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div className="flex flex-col gap-4">
      {/* Image principale */}
      <div className="relative overflow-hidden rounded-2xl bg-bg-second">
        <img
          src={images[current]}
          alt={`${title} — capture ${current + 1}`}
          className="w-full max-h-[70vh] object-cover"
        />

        {/* Flèches */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-bg/70 hover:bg-bg border border-[--color-text]/10 rounded-full p-3 transition-all duration-200 hover:border-main cursor-pointer"
          aria-label="Image précédente"
        >
          <FiChevronLeft className="text-xl" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-bg/70 hover:bg-bg border border-[--color-text]/10 rounded-full p-3 transition-all duration-200 hover:border-main cursor-pointer"
          aria-label="Image suivante"
        >
          <FiChevronRight className="text-xl" />
        </button>

        {/* Compteur */}
        <span className="absolute bottom-4 right-4 bg-bg/80 text-caption px-3 py-1 rounded-full text-[--color-text]/70">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`overflow-hidden rounded-xl flex-shrink-0 w-24 h-16 border-2 transition-all duration-200 cursor-pointer ${
              i === current ? "border-main shadow-glow" : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <img src={src} alt={`Miniature ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

const projects = projectsData.projects;
const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const { title, category, role, duration, techs, url, github, context, approach, result, gallery } = project;

  return (
    <>
      <PageHero title={title} subtitle={category} />

      <div className="container py-16 flex flex-col gap-20">

        {/* Lien retour */}
        <Link
          to="/projects"
          className="flex items-center gap-2 text-caption text-[--color-text]/50 hover:text-[--color-text] transition-colors w-fit"
        >
          <FiArrowLeft />
          Retour aux projets
        </Link>

        {/* Galerie */}
        {gallery?.length > 0 && (
          <AnimatedSection>
            <Gallery images={gallery} title={title} />
          </AnimatedSection>
        )}

        {/* Fiche rapide */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-bg-second rounded-2xl p-6 flex flex-col gap-1">
              <span className="text-caption text-[--color-text]/40 uppercase tracking-widest">Rôle</span>
              <span className="font-bold font-title">{role}</span>
            </div>
            <div className="bg-bg-second rounded-2xl p-6 flex flex-col gap-1">
              <span className="text-caption text-[--color-text]/40 uppercase tracking-widest">Durée</span>
              <span className="font-bold font-title">{duration}</span>
            </div>
            <div className="bg-bg-second rounded-2xl p-6 flex flex-col gap-2 col-span-2">
              <span className="text-caption text-[--color-text]/40 uppercase tracking-widest">Stack</span>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-caption px-3 py-1 rounded-full border border-main/40 text-main"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Liens */}
        <AnimatedSection>
          <div className="flex flex-wrap gap-4">
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                <FiExternalLink />
                Voir le projet
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
                <FiGithub />
                GitHub
              </a>
            )}
          </div>
        </AnimatedSection>

        {/* Narration */}
        <div className="flex flex-col gap-16">
          <AnimatedSection className="flex flex-col gap-4">
            <h2 className="text-h2 font-title">Contexte</h2>
            <div className="w-25 h-1 bg-main" />
            <p className="text-body text-[--color-text]/70 max-w-2xl">{context}</p>
          </AnimatedSection>
          <AnimatedSection className="flex flex-col gap-4">
            <h2 className="text-h2 font-title">Démarche</h2>
            <div className="w-25 h-1 bg-main" />
            <p className="text-body text-[--color-text]/70 max-w-2xl">{approach}</p>
          </AnimatedSection>
          <AnimatedSection className="flex flex-col gap-4">
            <h2 className="text-h2 font-title">Résultat</h2>
            <div className="w-25 h-1 bg-main" />
            <p className="text-body text-[--color-text]/70 max-w-2xl">{result}</p>
          </AnimatedSection>
        </div>

      </div>
    </>
  );
};

export default ProjectDetail;
