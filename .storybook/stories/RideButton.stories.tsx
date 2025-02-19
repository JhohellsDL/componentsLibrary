import type {Meta, StoryObj} from '@storybook/react';
import RideButton from '../../src/components/RideButton/RideButton';
import { View } from 'react-native';
import React from 'react';

const meta = {
  title: 'RideButton',
  component: RideButton,
  argTypes: {
    onPress: { action: 'Boton presionado' },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 24, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ]
} satisfies Meta<typeof RideButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Continuar',
    onPress: () => {
      console.log('Button pressed');
    },
    size: 'medium', // Puedes ajustar el tamaño según sea necesario
  },
};

export const Large: Story = {
  args: {
    text: 'Continuar',
    onPress: () => {
      console.log('Button pressed');
    },
    size: 'large', // Puedes ajustar el tamaño según sea necesario
  },
};

export const Small: Story = {
  args: {
    text: 'Continuar',
    onPress: () => {
      console.log('Button pressed');
    },
    size: 'small', // Puedes ajustar el tamaño según sea necesario
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