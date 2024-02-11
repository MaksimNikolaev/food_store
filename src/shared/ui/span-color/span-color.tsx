import React, { FC } from 'react';
import { TSpanColor } from './types';

export const SpanColor: FC<TSpanColor> = ({ color = 'var(--blue-color)', children }) => {
  return <span style={{ color }}>{children}</span>;
};
