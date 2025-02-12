import { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
interface Props extends PropsWithChildren {
    style?: StyleProp<ViewStyle>;
}
declare const Card: ({ style, children }: Props) => import("react/jsx-runtime").JSX.Element;
export default Card;
