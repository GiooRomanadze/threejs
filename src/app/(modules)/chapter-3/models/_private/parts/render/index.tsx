import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import Fox from './parts/helmet';
import Light from './parts/light';
import Ground from './parts/ground';

const Render = () => {
  return (
    <>
      <OrbitControls />

      <Light />
      <Ground />

      <Suspense>
        <Fox />
      </Suspense>
    </>
  );
};

export default Render;
