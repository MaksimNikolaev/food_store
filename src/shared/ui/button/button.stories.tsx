import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/App'

import { Button } from './button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {    
    layout: 'centered',
  },  
  tags: ['autodocs'],  
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Press me'
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Press me'
  },
};
