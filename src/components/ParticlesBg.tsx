// src/components/ParticlesBg.tsx
import { useCallback } from 'react';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';
import type { Container, ISourceOptions } from 'tsparticles-engine';
import { useSettings } from '@/contexts/SettingsContext';

const ParticlesBg = () => {
  const { darkMode, currentColor } = useSettings();

  const options: ISourceOptions = {
    background: {
      color: {
        value: darkMode ? "#000000" : "#ffffff"
      }
    },
    particles: {
      number: { value: 70 },
      color: { value: currentColor },
      shape: { type: "circle" },
      opacity: { value: 0.8 },
      size: { value: 3 },
      links: {
        enable: true,
        distance: 150,
        color: currentColor,
        opacity: 0.5,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: {
          default: "out"
        }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" }
      },
      modes: {
        repulse: { distance: 100 }
      }
    },
    detectRetina: true
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
};

export default ParticlesBg; 