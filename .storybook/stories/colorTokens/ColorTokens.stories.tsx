// src/components/ColorTokens/ColorTokens.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ColorTokens from './ColorTokens';

const meta: Meta<typeof ColorTokens> = {
  title: 'Tokens/ColorTokens',
  component: ColorTokens,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};