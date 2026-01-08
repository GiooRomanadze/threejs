'use client';

import { Canvas } from '@react-three/fiber';

import Render from './_private/parts/render';

const First = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Render />
    </Canvas>
  );
};

export default First;
