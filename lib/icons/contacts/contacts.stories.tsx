import type { Meta, StoryObj } from '@storybook/react';
import { Contacts } from './'

const meta = {
  title: 'Icons/Contacts',
  component: Contacts,
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
} satisfies Meta<typeof Contacts>;

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
