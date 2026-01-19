import { Color } from 'three';
import type { getGeometryFn } from './types';

const getRandomSign = (radius: number, randomness: number, randomnessPower: number) =>
  Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius;

export const getGeometry: getGeometryFn = ({
  count,
  radius,
  branches,
  randomness,
  randomnessPower,
  innerColor,
  outerColor,
}) => {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const scale = new Float32Array(count);
  const random = new Float32Array(count * 3);

  const threeInsideColor = new Color(innerColor);
  const threeOutsideColor = new Color(outerColor);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const randomRadius = Math.random() * radius;
    const branchAngle = ((i % branches) / branches) * Math.PI * 2;

    const getRandom = getRandomSign.bind(null, randomRadius, randomness, randomnessPower);

    random[i3] = getRandom();
    random[i3 + 1] = getRandom();
    random[i3 + 2] = getRandom();

    positions[i3] = Math.cos(branchAngle) * randomRadius;
    positions[i3 + 1] = 0;
    positions[i3 + 2] = Math.sin(branchAngle) * randomRadius;

    const mixedColor = threeInsideColor.clone();
    mixedColor.lerp(threeOutsideColor, randomRadius / radius);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

    scale[i] = Math.random();
  }

  return { positions, colors, scale, random };
};
