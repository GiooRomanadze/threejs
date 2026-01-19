'use client';

import { Canvas } from '@react-three/fiber';
import Render from './_private/parts/render';

const Galaxy = () => {
  return (
    <Canvas camera={{ position: [0, 5, 8] }}>
      <Render />
    </Canvas>
  );
};

export default Galaxy;
