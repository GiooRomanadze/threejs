'use client';

import { Canvas } from '@react-three/fiber';
import styles from './index.module.css';
import type { ThreeLayoutFn } from './types';

const ThreeLayout: ThreeLayoutFn = ({ children }) => {
  return (
    <div id="canvas-container" className={styles.container}>
      <Canvas>{children}</Canvas>
    </div>
  );
};

export default ThreeLayout;
