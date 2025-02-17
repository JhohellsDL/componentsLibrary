// rideButtonHelper.tsx
import { tokens } from '../../../../tamagui.config';


export const getButtonBackgroundColor = (state: string, pressed: boolean) => {
  if (state === 'disabled') {
    return tokens.color.ride_gl_color_accent_20;
  }
  if (pressed) {
    return tokens.color.ride_gl_color_accent_60;
  } else {
    return tokens.color.ride_gl_color_accent_40;
  }
};

export const getButtonBorderColor = (state: string, pressed: boolean) => {
  if (state === 'disabled') {
    return tokens.color.ride_gl_color_neutral_100;
  }
  if (pressed) {
    return tokens.color.ride_gl_color_neutral_100;
  } else {
    return tokens.color.ride_gl_color_neutral_100;
  }
};

export const getButtonTextColor = (state: string, pressed: boolean) => {
  if (state === 'disabled') {
    return tokens.color.ride_gl_color_neutral_100;
  }
  if (pressed) {
    return tokens.color.ride_gl_color_accent_60;
  } else {
    return tokens.color.ride_gl_color_accent_40;
  }
};
