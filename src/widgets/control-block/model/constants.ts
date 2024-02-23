import food from '../../../shared/assets/images/food.webp';
import food3 from '../../../shared/assets/images/food3.webp';
import food4 from '../../../shared/assets/images/food4.webp';
import { TPurchases } from './types';

export const notifications = [
  {
    name: 'Chicken Hell',
    photo: food,
    status: 'On The Way',
    time: '3:09 PM',
  },
  {
    name: 'Swe Dish',
    photo: food3,
    status: 'Delivered',
    time: 'Yesterday',
  },
  {
    name: 'Fish Hell Veg',
    photo: food4,
    status: 'Cancelled',
    time: 'Yesterday',
  },
];

export const purchases: TPurchases[] = [
  {
    id: 1,
    icon: 'expense',
    title: 'Expense',
    subtitle: 'Increased By 10%',
    sum: '$409.00',
    color: 'blue',
  },
  {
    id: 2,
    icon: 'vocher',
    title: 'Vocher Usage',
    subtitle: 'Increased By 5%',
    sum: '$45.78',
    color: 'orange',
  },
];
