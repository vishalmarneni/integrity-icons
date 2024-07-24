import type { Meta, StoryObj } from '@storybook/react';
import { SmsSent } from './'

const meta = {
  title: 'Icons/SmsSent',
  component: SmsSent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
  args: { 
    size: 'md'
  },
} satisfies Meta<typeof SmsSent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
   size: 'md',
   color: 'black'
  },
};

export const VeryLarge: Story = {
  args: {
    size: 'xl',
    color: 'black'
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    color: 'black'
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'black'
  },
};
