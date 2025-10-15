import { Dimensions, PixelRatio } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const BASE_WIDTH = 390; // your design width (iPhone 12/13/14 ~390dp)

const computeRem = () => {
  const { width, height } = Dimensions.get('window');
  const shortest = Math.min(width, height);
  let rem = shortest / BASE_WIDTH;
  // keep it sane on very small phones/tablets
  rem = Math.max(0.85, Math.min(rem, 1.25));
  return rem;
};

export const buildTypography = () => {
  const $rem = computeRem();
  const $fontScale = PixelRatio.getFontScale?.() ?? 1;
  EStyleSheet.clearCache();
  EStyleSheet.build({ $rem, $fontScale });
};

export const rf = (px: number) => {
  const rem = EStyleSheet.value('$rem') as number;
  return px * rem;
};
