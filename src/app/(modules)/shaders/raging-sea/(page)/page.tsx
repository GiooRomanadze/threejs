'use client';

import { Canvas } from '@react-three/fiber';
import type { RagingSeaFn } from './types';
import Render from './_private/parts/render';

const RagingSea: RagingSeaFn = () => (
  <Canvas camera={{ position: [0, 0, 2] }}>
    <Render />
  </Canvas>
);

export default RagingSea;
