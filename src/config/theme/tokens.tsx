// config/theme/tokens.ts
export const colorsRide = {
  ride_sys_color_surface_extreme: '#13172C',
  ride_sys_color_surface_strong: '#2B304E',
  ride_sys_color_surface_disable: 'hsla(231, 30.30%, 74.10%, 0.10)',
  ride_sys_color_surface_medium: '#E1E5FC',
  ride_sys_color_surface_default: '#FFFFFF',
  ride_sys_color_text_disable: '#A9AFD1',
};

export const sizesRide = {
  ride_sys_border_radius_container_pill: 120,
  ride_gl_spacing_small: 4,
  ride_gl_spacing_medium: 6,
  ride_gl_spacing_large: 8,
  ride_gl_spacing_xlarge: 12,
  ride_gl_spacing_2xlarge: 16,
  ride_gl_spacing_3xlarge: 24,
  ride_gl_spacing_4xlarge: 28,
  ride_gl_spacing_5xlarge: 32,
  ride_gl_spacing_6xlarge: 36,
  ride_gl_spacing_7xlarge: 40,
  ride_gl_spacing_8xlarge: 44,
};

export const typographyRide = {
  ride_gl_font_size_small: 12,
  ride_gl_font_size_medium: 14,
  ride_gl_font_size_large: 16,
  ride_gl_font_size_xlarge: 18,
  ride_gl_font_size_2xlarge: 20,
  ride_gl_font_size_3xlarge: 24,
  ride_gl_font_size_4xlarge: 28,
  ride_gl_font_size_5xlarge: 32,
};

export const borderRadius = {
  containerPill: sizesRide.ride_sys_border_radius_container_pill,
  small: 8,
  medium: 16,
  large: 24,
};

export const ride_sys_text_label_xlarge_default = {
  fontFamily: 'Br-Sonoma',
  fontWeight: 700,
  fontStyle: 'normal',
  letterSpacing: 0.4,
  fontSize: typographyRide.ride_gl_font_size_xlarge,
  lineHeight: 24,
};

export const ride_sys_text_label_large_default = {
  fontFamily: 'Br-Sonoma',
  fontWeight: 700,
  fontStyle: 'normal',
  letterSpacing: 0.4,
  fontSize: typographyRide.ride_gl_font_size_large,
  lineHeight: 16,
};

export const ride_sys_text_label_medium_default = {
  fontFamily: 'Br-Sonoma',
  fontWeight: 700,
  fontStyle: 'normal',
  letterSpacing: 0.4,
  fontSize: typographyRide.ride_gl_font_size_medium,
  lineHeight: 16,
};

export const ride_sys_text_label_small_default = {
  fontFamily: 'Br-Sonoma',
  fontWeight: 700,
  fontStyle: 'normal' as 'normal',
  letterSpacing: 0.4,
  fontSize: typographyRide.ride_gl_font_size_small,
  lineHeight: 16,
};

export const shadows = {
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.3,
  shadowRadius: 2,
};
