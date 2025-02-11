// Button.styles.ts
import {StyleSheet} from 'react-native';
import {
  ride_sys_text_label_large_default,
  ride_sys_text_label_medium_default,
  ride_sys_text_label_small_default,
  ride_sys_text_label_xlarge_default,
  shadows,
  sizesRide,
} from '../../config/theme/tokens'; // Importa los tokens

export const stylesRide = StyleSheet.create({
  boton: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    ...shadows,
  },
  small: {
    paddingVertical: sizesRide.ride_gl_spacing_large,
    paddingHorizontal: sizesRide.ride_gl_spacing_2xlarge,
    borderRadius: sizesRide.ride_sys_border_radius_container_pill,
    borderWidth: 2,
  },
  medium: {
    paddingVertical: sizesRide.ride_gl_spacing_large,
    paddingHorizontal: sizesRide.ride_gl_spacing_3xlarge,
    borderRadius: sizesRide.ride_sys_border_radius_container_pill,
    borderWidth: 2,
  },
  large: {
    paddingVertical: sizesRide.ride_gl_spacing_xlarge,
    paddingHorizontal: sizesRide.ride_gl_spacing_5xlarge,
    borderRadius: sizesRide.ride_sys_border_radius_container_pill,
    borderWidth: 3,
  },
  xlarge: {
    paddingVertical: sizesRide.ride_gl_spacing_2xlarge,
    paddingHorizontal: sizesRide.ride_gl_spacing_7xlarge,
    borderRadius: sizesRide.ride_sys_border_radius_container_pill,
    borderWidth: 3,
  },
  textSmall: ride_sys_text_label_small_default,
  textMedium: ride_sys_text_label_medium_default,
  textLarge: ride_sys_text_label_large_default,
  textxLarge: ride_sys_text_label_xlarge_default,
});
