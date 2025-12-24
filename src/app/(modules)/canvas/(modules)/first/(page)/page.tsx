'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const First = () => {
  return (
    <Canvas>
      <OrbitControls />

      <mesh>
        <boxGeometry />

        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
};

export default First;
