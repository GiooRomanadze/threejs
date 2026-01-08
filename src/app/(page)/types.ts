import type { ReactNode } from 'react';

// id, name, amount, items, onChange
type HomeProps = {
  checked: boolean;
  id: string;
  name: string;
  disabled?: boolean;
  amount: number;
  itemsArr: string[];
  itemsObj: { [key: string]: string };
  onChange: (value: string) => void;
};
export type HomeFn = (props: HomeProps) => ReactNode;
