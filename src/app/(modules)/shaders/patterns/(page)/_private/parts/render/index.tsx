import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

import fragmentShader from './parts/fragment/index.frag';
import vertexShader from './parts/vertex/index.vert';

const Render = () => {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;
  });

  return (
    <>
      <OrbitControls />

      <mesh ref={ref}>
        <planeGeometry args={[1, 1, 32, 32]} />
        <rawShaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} />
      </mesh>
    </>
  );
};

export default Render;
