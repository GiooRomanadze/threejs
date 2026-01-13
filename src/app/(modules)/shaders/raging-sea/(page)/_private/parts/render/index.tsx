import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useMemo, useRef } from 'react';
import { Color, type Mesh, type RawShaderMaterial } from 'three';
import vertexShader from './parts/vertex/index.vert';
import fragmentShader from './parts/fragment/index.frag';

const controls = {
  uBigWavesElevation: { value: 0.2, min: 0, max: 1, step: 0.01 },
  uBigWavesFrequency: { value: { x: 4, y: 1.5 }, step: 0.1, min: 0, max: 10 },
  uBigWavesSpeed: { value: 0.75, min: 0, max: 10, step: 0.001 },

  uDepthColor: { value: '#186691' },
  uSurfaceColor: { value: '#9bd8ff' },
  uColorOffset: { value: 0.08, min: 0, max: 1, step: 0.001 },
  uColorMultiplier: { value: 5, min: 0, max: 10, step: 0.001 },
};

const Render = () => {
  const ref = useRef<Mesh>(null);
  const {
    uBigWavesElevation,
    uBigWavesFrequency,
    uBigWavesSpeed,
    uDepthColor,
    uSurfaceColor,
    uColorOffset,
    uColorMultiplier,
  } = useControls(controls);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const material = ref.current.material as RawShaderMaterial;
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  const uniforms = useMemo(
    () => ({
      uBigWavesElevation: { value: controls.uBigWavesElevation.value },
      uBigWavesFrequency: { value: controls.uBigWavesFrequency.value },
      uBigWavesSpeed: { value: controls.uBigWavesSpeed.value },
      uDepthColor: { value: new Color(controls.uDepthColor.value) },
      uSurfaceColor: { value: new Color(controls.uSurfaceColor.value) },
      uColorOffset: { value: controls.uColorOffset.value },
      uColorMultiplier: { value: controls.uColorMultiplier.value },
      uTime: { value: 0 },
    }),
    []
  );

  useEffect(() => {
    if (!ref.current) return;
    const material = ref.current.material as RawShaderMaterial;
    const { uniforms } = material;

    uniforms.uBigWavesElevation.value = uBigWavesElevation;
    uniforms.uBigWavesFrequency.value = uBigWavesFrequency;
    uniforms.uBigWavesSpeed.value = uBigWavesSpeed;
    uniforms.uDepthColor.value = new Color(uDepthColor);
    uniforms.uSurfaceColor.value = new Color(uSurfaceColor);
    uniforms.uColorOffset.value = uColorOffset;
    uniforms.uColorMultiplier.value = uColorMultiplier;
  }, [
    uBigWavesElevation,
    uBigWavesFrequency,
    uBigWavesSpeed,
    uDepthColor,
    uSurfaceColor,
    uColorOffset,
    uColorMultiplier,
  ]);

  return (
    <>
      <OrbitControls />

      <mesh ref={ref} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[1, 1, 124, 124]} />
        <rawShaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} />
      </mesh>
    </>
  );
};

export default Render;
