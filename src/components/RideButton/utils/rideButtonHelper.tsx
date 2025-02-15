import {colors} from '../../../tokens';

export const getButtonBackgroundColor = (state: string, pressed: boolean) => {
  if (state === 'disabled') {
    return colors.ride_sys_color_surface_disable;
  }
  if (pressed) {
    return colors.ride_sys_color_surface_default;
  } else {
    return colors.ride_sys_color_surface_extreme;
  }
};

export const getButtonBorderColor = (state: string, pressed: boolean) => {
  if (state === 'disabled') {
    return colors.ride_sys_color_surface_disable;
  }
  if (pressed) {
    return colors.ride_sys_color_surface_extreme;
  } else {
    return colors.ride_sys_color_surface_extreme;
  }
};

export const getButtonTextColor = (state: string, pressed: boolean) => {
  if (state === 'disabled') {
    return colors.ride_sys_color_text_disabled;
  }
  if (pressed) {
    return colors.ride_sys_color_surface_extreme;
  } else {
    return colors.ride_sys_color_surface_default;
  }
};
