import ReactCountryFlag from "react-country-flag";
import FeatureCard from "@/components/FeatureCard";
import profilData from "@/content/profilData.json";
import iconMap from "@/utils/iconMap";

const ProfilTab = () => {
  const { histoire, langues, valeurs, interets } = profilData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* Histoire */}
      <div className="md:col-span-2 bg-bg-second rounded-2xl p-8 flex flex-col gap-4">
        <span className="text-caption text-main font-bold uppercase tracking-widest">Mon histoire</span>
        <p className="text-body text-[--color-text]/80 leading-relaxed">{histoire}</p>
      </div>

      {/* Langues — regroupées */}
      <div className="bg-bg-second rounded-2xl p-6 flex flex-col justify-center gap-5">
        <span className="text-caption text-main font-bold uppercase tracking-widest">Langues</span>
        {langues.map((langue, i) => (
          <div key={i} className="flex items-center gap-3">
            <ReactCountryFlag countryCode={langue.code} svg style={{ width: "2rem", height: "2rem", borderRadius: "50%" }} />
            <div>
              <p className="font-bold font-title">{langue.name}</p>
              <p className="text-caption text-[--color-text]/50">{langue.level}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Valeurs — 4 colonnes */}
      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
        {valeurs.map((valeur, i) => {
          const Icon = iconMap[valeur.icon];
          return (
            <FeatureCard key={i} icon={<Icon className="text-2xl text-main" />} title={valeur.title} description={valeur.description} />
          );
        })}
      </div>

      {/* Centres d'intérêt */}
      <div className="md:col-span-3 bg-bg-second rounded-2xl p-6">
        <span className="text-caption text-main font-bold uppercase tracking-widest block mb-4">Centres d&apos;intérêt</span>
        <div className="flex flex-wrap gap-2">
          {interets.map((interet, i) => (
            <span key={i} className="px-4 py-2 rounded-full border border-main/30 text-caption hover:border-main hover:text-main transition-all duration-300">
              {interet}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProfilTab;
