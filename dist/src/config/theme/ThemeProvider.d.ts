import React from 'react';
export declare const ThemeProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => {
    colorsRide: {
        ride_sys_color_surface_extreme: string;
        ride_sys_color_surface_strong: string;
        ride_sys_color_surface_disable: string;
        ride_sys_color_surface_medium: string;
        ride_sys_color_surface_default: string;
        ride_sys_color_text_disable: string;
    };
    spacing: {
        readonly ride_gl_spacing_10xlarge: 80;
        readonly ride_gl_spacing_11xlarge: 96;
        readonly ride_gl_spacing_12xlarge: 112;
        readonly ride_gl_spacing_2xlarge: 16;
        readonly ride_gl_spacing_3xlarge: 20;
        readonly ride_gl_spacing_4xlarge: 24;
        readonly ride_gl_spacing_5xlarge: 32;
        readonly ride_gl_spacing_6xlarge: 40;
        readonly ride_gl_spacing_7xlarge: 48;
        readonly ride_gl_spacing_8xlarge: 56;
        readonly ride_gl_spacing_9xlarge: 64;
        readonly ride_gl_spacing_large: 8;
        readonly ride_gl_spacing_medium: 4;
        readonly ride_gl_spacing_none: 0;
        readonly ride_gl_spacing_small: 2;
        readonly ride_gl_spacing_xlarge: 12;
    };
    typography: {
        readonly ride_sys_text_label_small_default: {
            readonly fontFamily: string;
            readonly fontSize: 12;
            readonly lineHeight: 16;
            readonly letterSpacing: 0.04;
        };
        readonly ride_sys_text_label_medium_default: {
            readonly fontFamily: string;
            readonly fontSize: 14;
            readonly lineHeight: 16;
            readonly letterSpacing: 0.04;
        };
        readonly ride_sys_text_label_large_default: {
            readonly fontFamily: string;
            readonly fontSize: 16;
            readonly lineHeight: 16;
            readonly letterSpacing: 0.04;
        };
        readonly ride_sys_text_label_xlarge_default: {
            readonly fontFamily: string;
            readonly fontSize: 18;
            readonly lineHeight: 24;
            readonly letterSpacing: 0.04;
        };
        readonly ride_sys_text_label_large_regular: {
            readonly fontFamily: string;
            readonly fontSize: 16;
            readonly lineHeight: 16;
            readonly letterSpacing: 0;
        };
        readonly ride_sys_text_label_medium_regular: {
            readonly fontFamily: string;
            readonly fontSize: 14;
            readonly lineHeight: 16;
            readonly letterSpacing: 0;
        };
        readonly ride_sys_text_label_small_regular: {
            readonly fontFamily: string;
            readonly fontSize: 12;
            readonly lineHeight: 16;
            readonly letterSpacing: 0;
        };
    };
    shadows: {
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
    };
};
