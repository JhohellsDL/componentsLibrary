import React from 'react';
import CustomView from '../../src/components/CustomView/CustomView';
import RideButton from '../../src/components/RideButton/RideButton';

const HomeScreen = () => {
  return (
    <CustomView>
      <RideButton
        text="Ride button"
        size="medium"
        onPress={() => console.log('Pequeño presionado')}
      />
    </CustomView>
  );
};

export default HomeScreen;
