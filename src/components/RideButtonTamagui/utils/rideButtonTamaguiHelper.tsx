// rideButtonHelper.tsx
import { useTheme } from 'tamagui';
import { tokens } from '../../../../tamagui.config';


export const getButtonBackgroundColor = (state: string, pressed: boolean) => {
  const theme = useTheme();
  if (state === 'disabled') {
    return tokens.color.verdecito;
  }
  if (pressed) {
    return theme.colors.surfaceDefault;
  } else {
    return theme.colors.surfaceExtreme;
  }
};

export const getButtonBorderColor = (state: string, pressed: boolean) => {
  const theme = useTheme();
  if (state === 'disabled') {
    return theme.colors.surfaceDisable;
  }
  if (pressed) {
    return theme.colors.surfaceExtreme;
  } else {
    return theme.colors.surfaceExtreme;
  }
};

export const getButtonTextColor = (state: string, pressed: boolean) => {
  const theme = useTheme();
  if (state === 'disabled') {
    return theme.colors.textDisabled;
  }
  if (pressed) {
    return theme.colors.surfaceExtreme;
  } else {
    return theme.colors.surfaceDefault;
  }
};