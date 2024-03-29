import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/App'
import food1 from '../../../shared/assets/images/food1.webp'

import { Recipe } from './recipe';
import { formateDate } from '../../../shared/utils/function/date';

const meta = {
  title: 'Recipe',
  component: Recipe,
  parameters: {    
    layout: 'centered',    
  },  
  tags: ['autodocs'], 
} satisfies Meta<typeof Recipe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RecipePizza: Story = {
  args: {
    recipe: {
      id: 1,
      image: food1,
      category: 'Pizza',
      title: 'The Chicken King',
      time: formateDate(24),
      raiting: 4.8
    }
  },
};
