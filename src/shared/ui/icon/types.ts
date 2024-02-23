import { SVGProps } from 'react';

export type IconName =
  | 'logo'
  | 'inst'
  | 'linkedin'
  | 'facebook'
  | 'twitter'
  | 'arrow'
  | 'star'
  | 'arrow_left'
  | 'expense'
  | 'vocher'
  | 'raiting'
  | 'quote'
  | 'bookmark'
  | 'arrow_navigation';

export type TIcon = {
  name: IconName;
  handleClick?: (e: React.SyntheticEvent) => void;
  colorHover?: string;
} & SVGProps<SVGSVGElement>;
