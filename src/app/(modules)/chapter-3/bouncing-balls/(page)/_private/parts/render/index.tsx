import { Suspense, useState } from 'react';
import { button, useControls } from 'leva';
import { Physics } from '@react-three/rapier';
import { OrbitControls } from '@react-three/drei';
import Ball from './parts/ball';
import Light from './parts/light';
import Ground from './parts/ground';

const Render = () => {
  const [balls, setBalls] = useState<Array<number>>([]);

  useControls({ addBall: button(() => setBalls((prev) => [...prev, Date.now()])) });

  const onOut = (id: number) => setBalls((prev) => prev.filter((ballId) => ballId !== id));

  return (
    <>
      <OrbitControls />

      <Light />

      <Suspense>
        <Physics>
          {balls.map((id) => (
            <Ball key={id} onOut={() => onOut(id)} />
          ))}

          <Ground />
        </Physics>
      </Suspense>
    </>
  );
};

export default Render;
