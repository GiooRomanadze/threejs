import type { Group, Mesh, MeshBasicMaterial } from 'three';
import { useRef } from 'react';
import { Raycaster, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const getRaycaster = () => {
  const origin = new Vector3(-4, 0, 0);
  const direction = new Vector3(1, 0, 0).normalize();
  return new Raycaster(origin, direction);
};

const Render = () => {
  const ref = useRef<Group>(null!);
  const raycaster = getRaycaster();

  useFrame(({ clock: { elapsedTime } }) => {
    if (!ref.current) return;
    const items = ref.current.children as Mesh<any, MeshBasicMaterial>[];

    items[0].position.y = Math.sin(elapsedTime) * 2;
    items[1].position.y = Math.sin(elapsedTime * 2) * 2;
    items[2].position.y = Math.sin(elapsedTime * 4) * 2;

    const intersects = raycaster.intersectObjects(items) as { object: Mesh<any, MeshBasicMaterial> }[];

    items.forEach(({ material }) => material.color.set('white'));
    intersects.forEach(({ object: { material } }) => material.color.set('orange'));
  });

  return (
    <>
      <OrbitControls />

      <group name="balls" ref={ref}>
        <mesh position={[-2.5, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="red" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="green" />
        </mesh>
        <mesh position={[2.5, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="blue" />
        </mesh>
      </group>
    </>
  );
};

export default Render;
