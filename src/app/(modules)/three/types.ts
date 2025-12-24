import type { ReactNode } from 'react';

export type ThreeLayoutProps = { children: ReactNode };
export type ThreeLayoutFn = (props: Readonly<ThreeLayoutProps>) => ReactNode;
