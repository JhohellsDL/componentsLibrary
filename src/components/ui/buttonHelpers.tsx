// utils/buttonHelpers.ts

import {colorsRide} from '../../config/theme/tokens';

export const getButtonBackgroundColor = (state: string, pressed: boolean) => {
  if (state === 'disabled') {
    return colorsRide.ride_sys_color_surface_disable;
  }
  if (pressed) {
    return colorsRide.ride_sys_color_surface_default;
  } else {
    return colorsRide.ride_sys_color_surface_extreme;
  }
};

export const getButtonBorderColor = (state: string, pressed: boolean) => {
  if (state === 'disabled') {
    return colorsRide.ride_sys_color_surface_disable;
  }
  if (pressed) {
    return colorsRide.ride_sys_color_surface_extreme;
  } else {
    return colorsRide.ride_sys_color_surface_extreme;
  }
};

export const getButtonTextColor = (state: string, pressed: boolean) => {
  if (state === 'disabled') {
    return colorsRide.ride_sys_color_text_disable;
  }
  if (pressed) {
    return colorsRide.ride_sys_color_surface_extreme;
  } else {
    return colorsRide.ride_sys_color_surface_default;
  }
};
