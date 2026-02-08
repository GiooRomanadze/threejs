import type { GroundFn } from './types';

const Ground: GroundFn = () => (
  <mesh receiveShadow rotation-x={-Math.PI / 2}>
    <planeGeometry args={[10, 10]} />
    <meshStandardMaterial color="#444444" roughness={0.5} />
  </mesh>
);

export default Ground;
