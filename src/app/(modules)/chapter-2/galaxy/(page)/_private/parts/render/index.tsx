import { useMemo } from 'react';
import { useControls } from 'leva';
import { AdditiveBlending } from 'three';
import { OrbitControls } from '@react-three/drei';
import { getGeometry } from './helper';

const initControl = {
  size: { value: 0.02, min: 0.001, max: 0.1, step: 0.001 },
  count: { value: 1000, min: 100, max: 10000, step: 100 },

  radius: { value: 5, min: 0.1, max: 20, step: 0.1 },
  branches: { value: 3, min: 2, max: 10, step: 1 },
  spin: { value: 1, min: -5, max: 5, step: 0.001 },
  randomness: { value: 0.2, min: 0, max: 2, step: 0.001 },
  randomnessPower: { value: 3, min: 1, max: 10, step: 0.001 },

  innerColor: '#ff6030',
  outerColor: '#1b3984',
};

const Render = () => {
  const { size, ...geometryControls } = useControls(initControl);

  const { positions, colors } = useMemo(() => getGeometry(geometryControls), [geometryControls]);

  return (
    <>
      <OrbitControls />

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>

        <pointsMaterial depthWrite sizeAttenuation vertexColors size={size} blending={AdditiveBlending} />
      </points>
    </>
  );
};

export default Render;
