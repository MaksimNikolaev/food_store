import { ButtonHTMLAttributes } from 'react';

type TButtonVariant = 'primary' | 'secondary';

export type TButton = {
  variant: TButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;
