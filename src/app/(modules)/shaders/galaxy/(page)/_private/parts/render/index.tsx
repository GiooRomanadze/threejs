import { useControls } from 'leva';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { AdditiveBlending, type BufferGeometry, type Points, type RawShaderMaterial } from 'three';
import { getGeometry } from './helper';
import vertexShader from './parts/glsl/vertex/index.vert';
import fragmentShader from './parts/glsl/fragment/index.frag';

const initControl = {
  size: { value: 30, min: 10, max: 50, step: 1 },
  count: { value: 20000, min: 100, max: 1000000, step: 100 },
  radius: { value: 5, min: 0.01, max: 20, step: 0.01 },
  branches: { value: 3, min: 2, max: 20, step: 1 },
  randomness: { value: 0.5, min: 0, max: 2, step: 0.001 },
  randomnessPower: { value: 3, min: 1, max: 10, step: 0.001 },

  innerColor: '#ff6030',
  outerColor: '#1b3984',
};

const Render = () => {
  const dpr = useThree((state) => state.viewport.dpr);
  const ref = useRef<Points>(null);

  const { size, ...geometryControls } = useControls(initControl);

  const { positions, colors, scale, random } = useMemo(() => getGeometry(geometryControls), [geometryControls]);

  useEffect(() => {
    if (!ref.current) return;

    const material = ref.current.material as RawShaderMaterial;
    material.uniforms.uSize.value = size * dpr;
  }, [size, dpr]);

  useFrame((_, delta) => {
    if (!ref.current) return;

    const material = ref.current.material as RawShaderMaterial;
    material.uniforms.uTime.value += delta;
  });

  const uniforms = useMemo(() => ({ uSize: { value: initControl.size.value * dpr }, uTime: { value: 0 } }), [dpr]);

  return (
    <>
      <OrbitControls />

      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
          <bufferAttribute attach="attributes-aScale" args={[scale, 1]} />
          <bufferAttribute attach="attributes-aRandom" args={[random, 3]} />
        </bufferGeometry>

        <rawShaderMaterial
          vertexColors
          depthWrite={false}
          uniforms={uniforms}
          blending={AdditiveBlending}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </points>
    </>
  );
};

export default Render;
