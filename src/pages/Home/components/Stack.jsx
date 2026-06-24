const items = [
  "React",
  "Tailwind CSS",
  "Git",
  "Docker",
  "JavaScript",
  "PHP",
  "MySQL",
  "Figma",
  "WordPress",
  "Symfony",
  "Shopify",
];

export default function Stack() {
  return (
    <div
      className="overflow-hidden py-4"
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <div
        className="flex w-max"
        style={{ animation: "marquee 25s linear infinite" }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-8">
            <span className="text-main text-nav">✦</span>
            <span className="text-(--color-text) text-nav font-light whitespace-nowrap font-body">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}