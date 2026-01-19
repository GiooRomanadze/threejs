'use client';

import { Canvas } from '@react-three/fiber';
import Render from './_private/parts/render';

const Galaxy = () => {
  return (
    <Canvas camera={{ position: [0, 8, 10] }} dpr={[1, 2]}>
      <Render />
    </Canvas>
  );
};

export default Galaxy;
