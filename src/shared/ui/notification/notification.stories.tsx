import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/App'

import { Notification } from './notification';

const meta = {
  title: 'Notification',
  component: Notification,
  parameters: {    
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    }
  },  
  tags: ['autodocs'], 
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const sizeSM: Story = {
  args: {
    card: {
      photo: 'https://e2.edimdoma.ru/data/posts/0002/7800/27800-ed4_wide.jpg?1679298223',
      name: 'Chicken Hell',
      status: 'Delivered',
      time: 'Yesterday',
    },
    size: 'sm'
  },
};

export const sizeXS: Story = {
  args: {
    card: {
      photo: 'https://e2.edimdoma.ru/data/posts/0002/7800/27800-ed4_wide.jpg?1679298223',
      name: 'Chicken Hell',
      status: 'Delivered',
      time: 'Yesterday',
    },
    size: 'xs'
  },
};

export const Cancelled: Story = {
  args: {
    card: {
      photo: 'https://e2.edimdoma.ru/data/posts/0002/7800/27800-ed4_wide.jpg?1679298223',
      name: 'Chicken Hell',
      status: 'Cancelled',
      time: 'Yesterday',
    },
    size: 'xs'
  },
};
