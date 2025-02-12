import { StyleSheet } from 'react-native';
import { border, spacing } from '../../tokens';
import { typography } from '../../tokens/systemTokens/typography';

export const sizeStylesRide = StyleSheet.create({
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    small: {
        paddingVertical: spacing.ride_gl_spacing_large,
        paddingHorizontal: spacing.ride_gl_spacing_2xlarge,
        borderRadius: border.ride_gl_border_radius_pill,
        borderWidth: 2,
    },
    medium: {
        paddingVertical: spacing.ride_gl_spacing_large,
        paddingHorizontal: spacing.ride_gl_spacing_3xlarge,
        borderRadius: border.ride_gl_border_radius_pill,
        borderWidth: 2,
    },
    large: {
        paddingVertical: spacing.ride_gl_spacing_xlarge,
        paddingHorizontal: spacing.ride_gl_spacing_5xlarge,
        borderRadius: border.ride_gl_border_radius_pill,
        borderWidth: 3,
    },
    xlarge: {
        paddingVertical: spacing.ride_gl_spacing_2xlarge,
        paddingHorizontal: spacing.ride_gl_spacing_7xlarge,
        borderRadius: border.ride_gl_border_radius_pill,
        borderWidth: 3,
    },
});

export const textStyleRide = StyleSheet.create({
    textSmall: { ...typography.ride_sys_text_label_small_default, fontFamily: 'Br-Sonoma' },
    textMedium: { ...typography.ride_sys_text_label_medium_default },
    textLarge: { ...typography.ride_sys_text_label_large_default, fontFamily: 'Arial' },
    textXLarge: { ...typography.ride_sys_text_label_xlarge_default, fontFamily: 'Br-Sonoma' },
});
