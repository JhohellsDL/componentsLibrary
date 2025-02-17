import {createFont, createTamagui, createTokens} from 'tamagui';
import { globalTokens, letterSpacing } from './src/tokens';
import { fontSize } from './src/tokens/globalTokens/fontSize';
import { letterHeight } from './src/tokens/globalTokens/letterHeight';
import { radius } from './src/tokens/globalTokens/radius';
import { spacing } from './src/tokens/globalTokens/spacing';
import { glyph, icon, fullicon } from './src/tokens/globalTokens/graphics';

export const tokens = createTokens({
  graphichs: {...glyph, ...icon, ...fullicon},
  color: { ...globalTokens },
  fontSize: { ...fontSize },
  letterHeight: { ...letterHeight },
  letterSpacing: { ...letterSpacing },
  radius: { ...radius },
  spacing: { ...spacing },
});

export const config = createTamagui({
  tokens,
});

export type AppConfig = typeof config;
