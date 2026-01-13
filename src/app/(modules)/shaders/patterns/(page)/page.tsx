'use client';

import { Canvas } from '@react-three/fiber';
import Render from './_private/parts/render';

const Patterns = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Render />
    </Canvas>
  );
};

export default Patterns;
