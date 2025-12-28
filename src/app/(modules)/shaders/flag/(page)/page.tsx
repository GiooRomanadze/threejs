'use client';

import { Canvas } from '@react-three/fiber';
import Render from './_private/parts/render';

const First = () => {
  return (
    <Canvas>
      <Render />
    </Canvas>
  );
};

export default First;
