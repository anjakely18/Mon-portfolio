import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/assets/data";

const SkillsAccordion = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  const activeSkill = skills.find((s) => s.id === activeId);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => {
          const isActive = activeId === skill.id;
          return (
            <button
              key={skill.id}
              onClick={() => toggle(skill.id)}
              className={`bg-bg-second rounded-2xl p-6 flex items-center gap-4 text-left cursor-pointer transition-all duration-300 border ${
                isActive
                  ? "border-main shadow-glow"
                  : "border-transparent hover:border-main/30"
              }`}
            >
              {skill.icon}
              <span className="font-bold font-title text-h3">{skill.title}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {activeSkill && (
          <motion.div
            key={activeSkill.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="bg-bg-second rounded-2xl p-8 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              {activeSkill.icon}
              <h3 className="font-bold font-title text-h3">{activeSkill.title}</h3>
            </div>
            <p className="text-body text-white/70">{activeSkill.text}</p>
            <div className="flex flex-wrap gap-2">
              {activeSkill.techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full border border-main/30 text-caption text-main"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsAccordion;
