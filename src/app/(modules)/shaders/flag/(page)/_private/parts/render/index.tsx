import { useControls } from 'leva';
import { useMemo, useRef } from 'react';
import { Color, type Mesh, type RawShaderMaterial, TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import flagAsset from './assets/flag.png';
import fragmentShader from './parts/fragment/index.frag';
import vertexShader from './parts/vertex/index.vert';

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

  useFrame((state) => {
    if (!ref.current) return;
    const material = ref.current.material as RawShaderMaterial;
    material.uniforms.uTime.value = state.clock.elapsedTime;
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
