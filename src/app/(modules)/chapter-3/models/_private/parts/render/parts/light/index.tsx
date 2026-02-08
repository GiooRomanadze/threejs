import type { LightFn } from './types';

const shadowProps = {
  'shadow-mapSize': [1025, 1025],
  'shadow-camera-far': 15,
  'shadow-camera-near': 2,
  'shadow-camera-left': -6,
  'shadow-camera-right': 6,
  'shadow-camera-top': 5,
};

const Light: LightFn = () => {
  return (
    <>
      <ambientLight intensity={2.4} />
      <directionalLight castShadow intensity={1.8} position={[5, 5, 5]} {...shadowProps} />
    </>
  );
};

export default Light;
