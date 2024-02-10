import { SVGProps } from 'react';

export type IconName = 'logo' | 'inst' | 'linkedin' | 'facebook' | 'twitter';

export type TIcon = {
  name: IconName;
  handleClick?: (e: React.SyntheticEvent) => void;
  colorHover?: string;
} & SVGProps<SVGSVGElement>;
