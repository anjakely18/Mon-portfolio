import { useEffect, useState } from "react";
import { Particles, ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const { loaded } = useParticlesProvider();

  return loaded ? (
    <Particles
      className="absolute inset-0 z-0"
      options={{
        particles: {
          number: { value: 80 },
          color: { value: "#ae90e9" },
          opacity: { value: { min: 0.1, max: 0.5 } },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  ) : null;
};

export default function ParticlesWrapper() {
  return (
    <ParticlesProvider init={loadSlim}>
      <ParticlesBackground />
    </ParticlesProvider>
  );
}
