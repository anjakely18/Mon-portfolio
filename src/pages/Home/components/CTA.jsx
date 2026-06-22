import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="container py-20 md:py-32">
      <div className="border border-main/20 rounded-2xl py-16 px-8 flex flex-col items-center text-center gap-6 bg-bg-second">
        <span className="flex items-center gap-2 bg-main/10 text-main text-caption font-bold px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-main animate-pulse" />
          Ouverte aux opportunités
        </span>
        <h2 className="text-h2 font-title font-bold max-w-xl">
          Prête pour de nouvelles{" "}
          <span className="text-main">aventures</span>
        </h2>
        <p className="text-caption max-w-md opacity-70">
          Si mon profil vous intéresse, je serais ravie d'échanger.
        </p>
        <Link to="/contact" className="btn-primary mt-2">
          Me contacter
        </Link>
      </div>
    </section>
  );
};

export default CTA;
