import type { ReactNode } from 'react';

export type RootLayoutProps = { children: ReactNode };
export type RootLayoutFn = (props: Readonly<RootLayoutProps>) => ReactNode;
