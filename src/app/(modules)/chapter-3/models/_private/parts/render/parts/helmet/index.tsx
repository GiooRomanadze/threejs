import type { Group } from 'three';
import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { type FoxFn } from './types';

const Fox: FoxFn = () => {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('/models/fox/data.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions[names[0]];
    action?.reset().fadeIn(10).play();

    return () => {
      action?.fadeOut(0.2);
      action?.stop();
    };
  }, [actions, names]);

  return (
    <group ref={group} scale={0.02}>
      <primitive object={scene} />
    </group>
  );
};

export default Fox;
