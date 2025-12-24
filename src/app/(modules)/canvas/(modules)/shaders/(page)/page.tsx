'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import fragmentShader from './parts/fragment/index.frag';
import vertexShader from './parts/vertex/index.vert';

const First = () => {
  return (
    <Canvas>
      <OrbitControls />

      <mesh>
        <planeGeometry args={[1, 1, 32, 32]} />
        <rawShaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} />
      </mesh>
    </Canvas>
  );
};

export default First;
