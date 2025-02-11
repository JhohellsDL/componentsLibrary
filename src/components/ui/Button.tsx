// Button.tsx
import React from 'react';
import {Pressable, Text, ActivityIndicator} from 'react-native';
import {stylesRide} from './Button.styles'; // Importa los estilos

import {usePressed} from '../../hooks/usePressed';
import {
  getButtonBackgroundColor,
  getButtonBorderColor,
  getButtonTextColor,
} from './buttonHelpers';
import { useTheme } from '../../config/theme/ThemeProvider';

interface Props {
  text: string;
  onPress: () => void;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  state?: 'default' | 'disabled' | 'loading';
}

const Button = ({text, onPress, size = 'medium', state = 'default'}: Props) => {
  const {colorsRide} = useTheme();
  const {pressed, onPressIn, onPressOut} = usePressed(); // Usa el hook

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return stylesRide.small;
      case 'large':
        return stylesRide.large;
      case 'medium':
        return stylesRide.medium;
      case 'xlarge':
        return stylesRide.xlarge;
    }
  };

  const getTextSizeStyle = () => {
    switch (size) {
      case 'small':
        return stylesRide.textSmall;
      case 'large':
        return stylesRide.textLarge;
      case 'medium':
        return stylesRide.textMedium;
      case 'xlarge':
        return stylesRide.textxLarge;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={state === 'disabled' || state === 'loading'}
      style={[
        stylesRide.boton,
        getSizeStyle(),
        {
          backgroundColor: getButtonBackgroundColor(state, pressed),
          borderColor: getButtonBorderColor(state,pressed),
        },
      ]}>
      {state === 'loading' ? (
        <ActivityIndicator color={colorsRide.ride_sys_color_surface_default} />
      ) : (
        <Text
          style={[getTextSizeStyle(), {color: getButtonTextColor(state,pressed)}]}>
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;

