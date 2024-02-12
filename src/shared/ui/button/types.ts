import { ButtonHTMLAttributes } from 'react';

export type TButtonVariant = 'primary' | 'secondary';

export type TButton = {
  variant: TButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;
