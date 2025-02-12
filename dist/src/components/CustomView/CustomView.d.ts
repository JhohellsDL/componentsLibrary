import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}
declare const CustomView: ({ style, children }: Props) => import("react/jsx-runtime").JSX.Element;
export default CustomView;
