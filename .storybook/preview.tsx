// .storybook/preview.tsx
import type { Preview } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Story />
        </View>
      </ScrollView>
    ),
    withKnobs,
  ],
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    width: '100%',
    maxWidth: 600,
  },
});

export default preview;