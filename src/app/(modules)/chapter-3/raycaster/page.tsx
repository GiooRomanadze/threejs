'use client';

import { PCFShadowMap } from 'three';
import { Canvas } from '@react-three/fiber';
import Render from './_private/parts/render';

const Raycaster = () => {
  return (
    <Canvas shadows={{ type: PCFShadowMap }} camera={{ position: [0, 0, 8] }} dpr={[1, 2]}>
      <Render />
    </Canvas>
  );
};

export default Raycaster;
