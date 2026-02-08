import { RigidBody } from '@react-three/rapier';
import type { GroundFn } from './types';

const Ground: GroundFn = () => (
  <>
    <RigidBody type="fixed">
      <mesh castShadow position-y={0.5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </RigidBody>

    <RigidBody type="fixed">
      <mesh receiveShadow rotation-x={-Math.PI / 2}>
        <boxGeometry args={[10, 10, 0.01]} />
        <meshStandardMaterial color="#777777" />
      </mesh>
    </RigidBody>
  </>
);

export default Ground;
