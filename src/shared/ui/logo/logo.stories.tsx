import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/App'

import { Logo } from './logo';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Logo',
  component: Logo,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)],
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
