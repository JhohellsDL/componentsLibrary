import type {Meta, StoryObj} from '@storybook/react';
import RideButton from './RideButton';

const meta = {
  component: RideButton,
} satisfies Meta<typeof RideButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Hello World',
    onPress: () => {
      console.log('Button pressed');
    },
    size: 'medium', // Puedes ajustar el tamaño según sea necesario
  },
};
