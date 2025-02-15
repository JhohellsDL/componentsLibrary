import {fonts} from '../globalTokens/fonts';
import {fontSize} from '../globalTokens/fontSize';
import {letterHeight} from '../globalTokens/letterHeight';
import {letterSpacing} from '../globalTokens/letterSpacing';

export const typography = {
  ride_sys_text_label_small_default: {
    fontFamily: fonts.br_sonoma_bold,
    fontSize: fontSize.ride_gl_font_size_small,
    lineHeight: letterHeight.ride_gl_line_height_medium,
    letterSpacing: letterSpacing.ride_gl_letter_spacing_2xlarge,
  },
  ride_sys_text_label_medium_default: {
    fontFamily: fonts.br_sonoma_bold,
    fontSize: fontSize.ride_gl_font_size_medium,
    lineHeight: letterHeight.ride_gl_line_height_medium,
    letterSpacing: letterSpacing.ride_gl_letter_spacing_2xlarge,
  },
  ride_sys_text_label_large_default: {
    fontFamily: fonts.br_sonoma_bold,
    fontSize: fontSize.ride_gl_font_size_large,
    lineHeight: letterHeight.ride_gl_line_height_medium,
    letterSpacing: letterSpacing.ride_gl_letter_spacing_2xlarge,
  },
  ride_sys_text_label_xlarge_default: {
    fontFamily: fonts.br_sonoma_bold,
    fontSize: fontSize.ride_gl_font_size_xlarge,
    lineHeight: letterHeight.ride_gl_line_height_xlarge,
    letterSpacing: letterSpacing.ride_gl_letter_spacing_2xlarge,
  },
  ride_sys_text_label_large_regular: {
    fontFamily: fonts.br_sonoma_regular,
    fontSize: fontSize.ride_gl_font_size_large,
    lineHeight: letterHeight.ride_gl_line_height_medium,
    letterSpacing: letterSpacing.ride_gl_letter_spacing_medium,
  },
  ride_sys_text_label_medium_regular: {
    fontFamily: fonts.br_sonoma_regular,
    fontSize: fontSize.ride_gl_font_size_medium,
    lineHeight: letterHeight.ride_gl_line_height_medium,
    letterSpacing: letterSpacing.ride_gl_letter_spacing_medium,
  },
  ride_sys_text_label_small_regular: {
    fontFamily: fonts.br_sonoma_regular,
    fontSize: fontSize.ride_gl_font_size_small,
    lineHeight: letterHeight.ride_gl_line_height_medium,
    letterSpacing: letterSpacing.ride_gl_letter_spacing_medium,
  },
} as const;
