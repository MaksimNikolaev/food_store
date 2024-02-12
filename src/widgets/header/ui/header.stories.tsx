import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/App'
import { Header } from './header';
import { menuNavigationList } from '../../../shared/utils/constants/constants';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Header',
  component: Header,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)],
  parameters: {    
    layout: 'centered',    
  } 
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OurNavigation: Story = {
  args: {
    menuNavigationList: menuNavigationList
  },
};
