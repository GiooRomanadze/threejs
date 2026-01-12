import { useControls } from 'leva';
import { useMemo, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { Color, type Mesh, type RawShaderMaterial, TextureLoader } from 'three';
import flagAsset from './assets/flag.png';
import vertexShader from './parts/vertex/index.vert';
import fragmentShader from './parts/fragment/index.frag';

const Render = () => {
  const ref = useRef<Mesh>(null);
  const { color } = useControls({ color: 'red' });

  const flagTexture = useLoader(TextureLoader, flagAsset.src);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new Color('red') },
      uTexture: { value: flagTexture },
    }),
    [flagTexture]
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const material = ref.current.material as RawShaderMaterial;
    material.uniforms.uTime.value = clock.elapsedTime;
    material.uniforms.uColor.value.set(color);
  });

  return (
    <>
      <OrbitControls />

      <mesh ref={ref}>
        <planeGeometry args={[1.5, 1, 32, 32]} />
        <rawShaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} />
      </mesh>
    </>
  );
};

export default Render;
