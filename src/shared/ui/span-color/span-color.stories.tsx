import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/App';

import { SpanColor } from './span-color';

const meta = {
  title: 'SpanColor',
  component: SpanColor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <h1>
          Control <Story /> Via Dashboard
        </h1>
      </div>
    ),
  ],
} satisfies Meta<typeof SpanColor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlueColor: Story = {
  args: {
    color: 'var(--blue-color)',
    children: 'Purchases',
  },
};

export const RedColor: Story = {
  args: {
    color: 'red',
    children: 'Purchases',
  },
};

export const GreenColor: Story = {
  args: {
    color: 'green',
    children: 'Purchases',
  },
};