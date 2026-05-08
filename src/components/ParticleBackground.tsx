import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

interface ParticleBackgroundProps {
  id?: string;
}

export function ParticleBackground({ id = "tsparticles" }: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "slow",
            },
          },
          modes: {
            slow: {
              factor: 3,
              radius: 200,
            },
          },
        },
        particles: {
          color: {
            value: ["#00ffff", "#8a2be2", "#ffffff"],
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.08,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.25,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
