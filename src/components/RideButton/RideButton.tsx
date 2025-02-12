import React from 'react';
import {ActivityIndicator, Pressable, Text} from 'react-native';
import {useTheme} from '../../config/theme/ThemeProvider';
import {usePressed} from '../../hooks/usePressed';
import {
  getButtonBackgroundColor,
  getButtonBorderColor,
  getButtonTextColor,
} from './utils/rideButtonHelper';
import {sizeStylesRide, textStyleRide} from './RideButton.styles';
import {colors} from '../../tokens';

interface Props {
  text: string;
  onPress: () => void;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  state?: 'default' | 'disabled' | 'loading';
}

const RideButton = ({
  text,
  onPress,
  size = 'medium',
  state = 'default',
}: Props) => {
  const {} = useTheme();
  const {pressed, onPressIn, onPressOut} = usePressed();

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return sizeStylesRide.small;
      case 'large':
        return sizeStylesRide.large;
      case 'medium':
        return sizeStylesRide.medium;
      case 'xlarge':
        return sizeStylesRide.xlarge;
    }
  };

  const getTextSizeStyle = () => {
    switch (size) {
      case 'small':
        return textStyleRide.textSmall;
      case 'large':
        return textStyleRide.textLarge;
      case 'medium':
        return textStyleRide.textMedium;
      case 'xlarge':
        return textStyleRide.textXLarge;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessibilityRole="button"
      disabled={state === 'disabled' || state === 'loading'}
      style={[
        sizeStylesRide.boton,
        getSizeStyle(),
        {
          backgroundColor: getButtonBackgroundColor(state, pressed),
          borderColor: getButtonBorderColor(state, pressed),
        },
      ]}>
      {state === 'loading' ? (
        <ActivityIndicator testID="loading-indicator" color={colors.ride_sys_color_surface_default} />
      ) : (
        <Text
          style={[
            getTextSizeStyle(),
            {color: getButtonTextColor(state, pressed)},
          ]}>
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default RideButton;
