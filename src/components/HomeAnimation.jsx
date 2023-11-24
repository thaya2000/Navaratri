import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { particle } from "../animation/particle";

export default function HomeAnimation() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Particles init={particlesInit} options={particle} />
    </>
  );
}
