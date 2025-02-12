import { Animated } from 'react-native';
declare const useAnimation: () => {
    animatedOpacity: Animated.Value;
    animatedTop: Animated.Value;
    fadeIn: ({ duration, toValue, callBack }: {
        duration?: number | undefined;
        toValue?: number | undefined;
        callBack?: (() => void) | undefined;
    }) => void;
    fadeOut: ({ duration, toValue, callBack }: {
        duration?: number | undefined;
        toValue?: number | undefined;
        callBack?: (() => void) | undefined;
    }) => void;
    startMovingTopPosition: ({ initialPosition, toValue, duration, easing, callBack, }: {
        initialPosition?: number | undefined;
        toValue?: number | undefined;
        duration?: number | undefined;
        easing?: import("react-native").EasingFunction | undefined;
        callBack?: (() => void) | undefined;
    }) => void;
};
export default useAnimation;
