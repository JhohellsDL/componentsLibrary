import React from 'react';
import {useTheme} from '../../config/theme/ThemeProvider';
import {usePressed} from '../../hooks/usePressed';
import {sizeStylesRide, textStyleRide} from '../RideButton/RideButtonStyles';
import {colors} from '../../tokens';
import {Button, Text, Spinner, styled} from 'tamagui';

interface Props {
  text: string;
  onPress: () => void;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  state?: 'default' | 'disabled' | 'loading';
}

// Define custom styles using Tamagui's styled function
const CustomButton = styled(Button, {
  name: 'CustomButton',
  variants: {
    size: {
      small: {
        height: 40,
        paddingHorizontal: 10,
      },
      medium: {
        height: 50,
        paddingHorizontal: 15,
      },
      large: {
        height: 60,
        paddingHorizontal: 20,
      },
      xlarge: {
        height: 70,
        paddingHorizontal: 25,
      },
    },
  },
});

const RideButton = ({
  text,
  onPress,
  size = 'medium',
  state = 'default',
}: Props) => {
  const {} = useTheme();
  const {onPressIn, onPressOut} = usePressed();

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
    <CustomButton
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessibilityRole="button"
      disabled={state === 'disabled' || state === 'loading'}
      size={size}
      style={[
        sizeStylesRide.boton,
        getSizeStyle(),
      ]}>
      {state === 'loading' ? (
        <Spinner
          testID="loading-indicator"
          color={colors.ride_sys_color_surface_default}
        />
      ) : (
        <Text
          style={[
            getTextSizeStyle(),
          ]}>
          {text}
        </Text>
      )}
    </CustomButton>
  );
};

export default RideButton;
