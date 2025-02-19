
import { Meta, StoryObj } from '@storybook/react';
import SpacingTokens from './SpacingTokens';

const meta: Meta<typeof SpacingTokens> = {
  title: 'Tokens/SpacingTokens',
  component: SpacingTokens,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
