interface Props {
    text: string;
    onPress: () => void;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    state?: 'default' | 'disabled' | 'loading';
}
declare const RideButton: ({ text, onPress, size, state, }: Props) => import("react/jsx-runtime").JSX.Element;
export default RideButton;
