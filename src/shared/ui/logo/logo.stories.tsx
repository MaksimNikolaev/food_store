import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/App'

import { Logo } from './logo';

const meta = {
  title: 'Logo',
  component: Logo,
  parameters: {    
    layout: 'centered',    
  },  
  tags: ['autodocs'], 
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoSm: Story = {
  args: {
    name: 'Logo',
    size: 'sm'
  },
};

export const LogoXs: Story = {
  args: {
    name: 'Logo',
    size: 'xs'
  },
};
