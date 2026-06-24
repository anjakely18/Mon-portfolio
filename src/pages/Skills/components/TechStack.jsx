import { motion } from "framer-motion";
import { techStacks } from "@/assets/data";
import SectionTitle from "@/components/SectionTitle";

const LEVEL_WIDTH = {
  bases: "25%",
  "intermédiaire": "50%",
  "avancé": "75%",
  expert: "100%",
};

const TechStack = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionTitle title="Stack technique" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {techStacks.map(({ name, Icon, color, level }, index) => (
          <div key={name} className="bg-bg-second rounded-2xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon className="text-xl" style={{ color }} />
                <span className="font-bold font-title">{name}</span>
              </div>
              <span className="text-caption text-(--color-text-muted) capitalize">{level}</span>
            </div>
            <div className="h-1.5 w-full bg-(--color-text)/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-main rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: LEVEL_WIDTH[level] }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.03 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
