import {useState} from 'react';

export const usePressed = () => {
  const [pressed, setPressed] = useState(false);

  const onPressIn = () => setPressed(true);
  const onPressOut = () => setPressed(false);

  return {pressed, onPressIn, onPressOut};
};
