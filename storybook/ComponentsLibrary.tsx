import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from '../src/navigation/Navigation';


const ComponentsLibrary = () => {
  return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
  );
};

export default ComponentsLibrary;
