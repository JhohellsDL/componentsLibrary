import React from 'react';
import Button from '../../components/ui/Button';
import CustomView from '../../components/ui/CustomView';

const HomeScreen = () => {

  return (
    <CustomView >
      <Button
            text="button"
            size="xlarge"
            onPress={() => console.log('Pequeño presionado')}
          />
    </CustomView>
  );
};


export default HomeScreen;
