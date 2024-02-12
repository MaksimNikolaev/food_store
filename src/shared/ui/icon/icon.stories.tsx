import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/App'

import { Icon } from './icon';

const meta = {
  title: 'Icons',
  component: Icon,
  parameters: {    
    layout: 'centered',
  },  
  tags: ['autodocs'],  
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
  args: {
    name: 'logo'
  },
};

export const Arrow: Story = {
  args: {
    name: 'arrow'
  },
};
export const Bookmark: Story = {
  args: {
    name: 'bookmark'
  },
};
export const Expense: Story = {
  args: {
    name: 'expense'
  },
};
export const Facebook: Story = {
  args: {
    name: 'facebook'
  },
};
export const Inst: Story = {
  args: {
    name: 'inst'
  },
};
export const Linkedin: Story = {
  args: {
    name: 'linkedin'
  },
};
export const Quote: Story = {
  args: {
    name: 'quote'
  },
};
export const Raiting: Story = {
  args: {
    name: 'raiting'
  },
};
export const Star: Story = {
  args: {
    name: 'star'
  },
};
export const Twitter: Story = {
  args: {
    name: 'twitter'
  },
};
export const Vocher: Story = {
  args: {
    name: 'vocher'
  },
};


