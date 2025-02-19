import type {Meta, StoryObj} from '@storybook/react';

import { View } from 'react-native';
import React from 'react';
import RideButton from './RideButton';

const meta = {
  title: 'RideButton',
  component: RideButton,
  argTypes: {
    onPress: { action: 'Boton presionado' },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 14, alignItems: 'center', justifyContent: 'center', flex: 1  }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof RideButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Continuar',
    onPress: () => {
      console.log('Button pressed');
    },
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    text: 'Continuar',
    onPress: () => {
      console.log('Button pressed');
    },
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    text: 'Continuar',
    onPress: () => {
      console.log('Button pressed');
    },
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Continuar',
    onPress: () => {
      console.log('Button pressed');
    },
    size: 'medium',
    state: 'disabled',
  },
};
