import { createFont, createTamagui, createTokens } from 'tamagui';

const systemFont = createFont({
  family: 'Br-Sonoma',
  lineHeight: {
    2: 22,
  },
  weight: {
    regular: 400,
    bold: 700,
  },
  letterSpacing: {
    1: 0.5,
    2: 0.8,
  },
  size: {
    1: 12,
    2: 14,
  },
});
// Set up tokens

// The keys can be whatever you want, but if using `tamagui` you'll want 1-10:

const size = {
  0: 0,
  1: 5,
  2: 10,
  true: 30,
  // ....
};

export const tokens = createTokens({
  size,
  space: {...size, '-1': -5, '-2': -10},
  radius: {0: 0, 1: 3},
  zIndex: {0: 0, 1: 100, 2: 200},
  color: {
    white: '#fff',
    black: '#000',
    naranja: '#ff6600',
  },
});

export const config = createTamagui({
  fonts: {
    heading: systemFont,
    body: systemFont,
  },
  tokens,

  themes: {
    light: {
      bg: '#f2f2f2',
      color: tokens.color.black,
    },
    dark: {
      bg: '#111',
      color: tokens.color.white,
    },
  },

  media: {
    sm: {maxWidth: 860},
    gtSm: {minWidth: 860 + 1},
    short: {maxHeight: 820},
    hoverNone: {hover: 'none'},
    pointerCoarse: {pointer: 'coarse'},
  },

  // Shorthands
  // Adds <View m={10} /> to <View margin={10} />
  // See Settings section on this page to only allow shorthands
  // Be sure to have `as const` at the end
  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
  } as const,

  // Change the default props for any styled() component with a name.
  // We are discouraging the use of this and have deprecated it, prefer to use
  // styled() on any component to change it's styles.
  defaultProps: {
    Text: {
      color: 'green',
    },
  },
});

export type AppConfig = typeof config
