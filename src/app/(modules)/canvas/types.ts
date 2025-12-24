import type { ReactNode } from 'react';

export type CanvasLayoutProps = { children: ReactNode };
export type CanvasLayoutFn = (props: Readonly<CanvasLayoutProps>) => ReactNode;
