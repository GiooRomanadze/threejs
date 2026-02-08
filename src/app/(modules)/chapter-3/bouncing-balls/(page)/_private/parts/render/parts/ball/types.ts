import type { ReactNode } from 'react';

type BallProps = { onOut: () => void };
export type BallFn = (props: BallProps) => ReactNode;
