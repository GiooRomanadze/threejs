'use client';

import { PCFShadowMap } from 'three';
import { Canvas } from '@react-three/fiber';
import Render from './_private/parts/render';

const Models = () => {
  return (
    <Canvas shadows={{ type: PCFShadowMap }} camera={{ position: [-3, 3, 3] }} dpr={[1, 2]}>
      <Render />
    </Canvas>
  );
};

export default Models;
