import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RideButton from './RideButton';

describe('RideButton Component', () => {
  it('renders correctly with text', () => {
    const { getByText } = render(<RideButton text="Click Me" onPress={() => {}} />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('displays ActivityIndicator when loading', () => {
    const { getByTestId } = render(<RideButton text="Loading" state="loading" onPress={() => {}} />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('disables button when state is disabled', () => {
    const { getByRole } = render(<RideButton text="Disabled" state="disabled" onPress={() => {}} />);
    expect(getByRole('button')).toBeDisabled();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<RideButton text="Press Me" onPress={onPressMock} />);

    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
