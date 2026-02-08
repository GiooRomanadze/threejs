import type { RapierRigidBody } from '@react-three/rapier';
import { useMemo, useRef } from 'react';
import { Vector3, type Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import type { BallFn } from './types';

const getRandomColor = () =>
  '#' +
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');

const Ball: BallFn = ({ onOut }) => {
  const color = useMemo(() => getRandomColor(), []);

  const ref = useRef<RapierRigidBody>(null);

  useFrame(() => {
    if (!ref.current) return;

    const y = ref.current.translation().y;
    if (y < -5) onOut();
  });

  return (
    <RigidBody ref={ref} position-y={10.502} restitution={0.8} friction={0.2}>
      <mesh castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </RigidBody>
  );
};

export default Ball;
