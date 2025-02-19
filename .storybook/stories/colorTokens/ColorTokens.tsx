// src/components/ColorTokens/ColorTokens.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { globalTokens } from '../../../src/tokens';

const ColorTokens = () => {
  return (
    
    <View style={styles.container}>
      {Object.entries(globalTokens).map(([name, color]) => (
        <View key={name} style={styles.colorContainer}>
          <View style={[styles.colorBox, { backgroundColor: color }]} />
          <Text style={styles.colorName}>{name}</Text>
          <Text style={styles.colorValue}>{color}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  colorContainer: {
    marginBottom: 16,
  },
  colorBox: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  colorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  colorValue: {
    fontSize: 14,
    color: '#555',
  },
});

export default ColorTokens;