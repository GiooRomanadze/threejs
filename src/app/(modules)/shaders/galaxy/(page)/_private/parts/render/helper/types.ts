type getGeometryProps = {
  count: number;
  radius: number;
  branches: number;
  randomness: number;
  randomnessPower: number;
  innerColor: string;
  outerColor: string;
};
export type getGeometryFn = (props: getGeometryProps) => {
  positions: Float32Array;
  colors: Float32Array;
  scale: Float32Array;
  random: Float32Array;
};
