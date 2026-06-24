import { useState } from "react";
import projectsData from "@/content/projects.json";
const projects = projectsData.projects;
import ProjectsCard from "@/components/ProjectsCard";

const CATEGORIES = ["Tous", "Front-end", "Full-stack", "CMS", "Design / UX", "Jeu"];
const PAGE_SIZE = 9;

const ProjectsList = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisible(PAGE_SIZE);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full text-caption font-bold border transition-all duration-300 ${
              activeCategory === cat
                ? "border-main text-main"
                : "border-(--color-text)/20 text-(--color-text-muted) hover:border-(--color-text)/50 hover:text-(--color-text)"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.slice(0, visible).map((project) => (
          <ProjectsCard key={project.slug} {...project} />
        ))}
      </div>

      {visible < filtered.length && (
        <div className="flex justify-center">
          <button
            onClick={() => setVisible((prev) => prev + PAGE_SIZE)}
            className="btn-ghost"
          >
            Voir plus
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
