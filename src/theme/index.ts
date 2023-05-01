import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

import { CustomButton } from './components/CustomButton';
import { menuTheme } from './components/Menu';
import { themeColors } from './foundations/colors';
import { themeRadii } from './foundations/radii';
import { themeSizes } from './foundations/sizes';
import { themeFonts } from './foundations/typography';
import { themeZIndices } from './foundations/zIndices';
import { globalStyles } from './styles';

const config: ThemeConfig = {
  cssVarPrefix: 'unifi',
};

export const defaultTheme = extendTheme({
  config,
  styles: globalStyles,
  colors: themeColors,
  fonts: themeFonts,
  zIndices: themeZIndices,
  sizes: themeSizes,
  radii: themeRadii,
  components: {
    Menu: menuTheme,
    CustomButton,
  },
});
