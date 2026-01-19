import { Color } from 'three';
import type { getGeometryFn } from './types';

const getRandomSign = (randomness: number, randomnessPower: number) =>
  Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness;

export const getGeometry: getGeometryFn = ({
  count,
  radius,
  branches,
  spin,
  randomness,
  randomnessPower,
  innerColor,
  outerColor,
}) => {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const threeInsideColor = new Color(innerColor);
  const threeOutsideColor = new Color(outerColor);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const randomRadius = Math.random() * radius;
    const spinAngle = randomRadius * spin;
    const branchAngle = ((i % branches) / branches) * Math.PI * 2;
    const angle = spinAngle + branchAngle;

    positions[i3] = Math.cos(angle) * randomRadius + getRandomSign(randomness, randomnessPower);
    positions[i3 + 1] = getRandomSign(randomness, randomnessPower);
    positions[i3 + 2] = Math.sin(angle) * randomRadius + getRandomSign(randomness, randomnessPower);

    const mixedColor = threeInsideColor.clone();
    mixedColor.lerp(threeOutsideColor, randomRadius / radius);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  return { positions, colors };
};
