import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import 'app/styles/index.scss'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'primary',
    theme: AppLinkTheme.PRIMARY,
    to: '/'
  }
};

export const Secondary: Story = {
  args: {
    children: 'secondary',
    theme: AppLinkTheme.SECONDARY,
    to: '/'
  }
};
