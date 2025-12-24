'use client';
import styles from './index.module.css';
import type { CanvasLayoutFn } from './types';

const CanvasLayout: CanvasLayoutFn = ({ children }) => (
  <div id="canvas-container" className={styles.container}>
    {children}
  </div>
);

export default CanvasLayout;
