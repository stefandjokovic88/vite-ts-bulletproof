import { defineStyleConfig } from '@chakra-ui/react';

export const CustomButton = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    borderRadius: '2xl',
    fontWeight: 'bold',
    width: '100%',
    // height: '41px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: 'sm',
    paddingTop: 2,
    paddingInline: 4,
    paddingBottom: 2,
  },
  variants: {
    dark: {
      backgroundColor: 'brand.darkBlue',
      color: 'white',
      borderColor: 'transparent',
    },
    light: {
      backgroundColor: 'white',
      color: 'brand.darkBlue',
      borderColor: 'brand.darkBlue',
    },
    warning: {
      backgroundColor: 'brand.orange',
      color: 'white',
      borderColor: 'transparent',
    },
  },
  sizes: {
    smallerText: {
      textTransform: 'none',
      fontWeight: 'normal',
    },
  },
  defaultProps: {
    variant: 'dark',
  },
});
