// src/components/SpacingTokens/SpacingTokens.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing } from '../..//tokens';

const SpacingTokens = () => {
  return (
    <View style={styles.container}>
      {Object.entries(spacing).map(([name, value]) => (
        <View key={name} style={styles.tokenContainer}>
          <Text style={styles.tokenName}>{name}</Text>
          <View style={[styles.tokenBox, { height: value }]} />
          <Text style={styles.tokenValue}>{value}px</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  tokenContainer: {
    marginBottom: 16,
  },
  tokenBox: {
    width: 50,
    backgroundColor: '#e0e0e0',
    marginBottom: 8,
  },
  tokenName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tokenValue: {
    fontSize: 14,
    color: '#555',
  },
});

export default SpacingTokens;
