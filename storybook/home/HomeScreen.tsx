/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import RideButton from '../../src/components/RideButton/RideButton';
import { StyleSheet, View } from 'react-native';
import SvgComponent from '../../src/assets/logos/MySvg';
import Rimac from '../../src/assets/logos/Rimac.svg';
import RimacDark from '../../src/assets/logos/RimacDark';
import { colors } from '../../src';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <RideButton
        text="button"
        size="xlarge"
        onPress={() => console.log('Pequeño presionado')}
      />
      <View style={{padding: 8}} />
      <RimacDark size={120}/>
      <Rimac width={120} height={40} fill={'green'}/>
      <RideButton
        text="button"
        size="large"
        onPress={() => console.log('Pequeño presionado')}
      />
      <View style={{padding: 8}} />
      <RideButton
        text="button"
        size="medium"
        onPress={() => console.log('Grande presionado')}
      />
      <View style={{padding: 8}} />
      <RideButton
        text="button"
        size="small"
        onPress={() => console.log('Mediano presionado')}
      />
      <View style={{padding: 8}} />
      <RideButton
        text="Deshabilitado"
        size="medium"
        state="disabled"
        onPress={() => console.log('No debería pasar')}
      />
      <View style={{padding: 8}} />
      <RideButton
        text="Cargando"
        size="medium"
        state="loading"
        onPress={() => console.log('No debería pasar')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
