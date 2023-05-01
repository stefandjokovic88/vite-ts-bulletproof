import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);

// define custom variants
const variants = {
  dropdown: {
    button: {
      fontWeight: 'normal',
      color: 'text.gray',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'inputBorderColor',
      borderRadius: 'lg',
      px: '1rem',
      width: 'full',
      height: 'inputFieldHeight',
      textAlign: 'left',
      _active: {
        borderBottomLeftRadius: 'none',
        borderBottomRightRadius: 'none',
        borderBottomColor: 'text.gray',
      },
    },
    list: {
      bg: 'white',
      borderTop: 'none',
      borderTopLeftRadius: 'none',
      borderBottomLeftRadius: 'none',
      padding: '0',
      textAlign: 'left',
    },
    item: {
      px: '0.5rem',
      outline: 'none',
      height: '4rem',
      cursor: 'pointer',
      _active: {
        background: 'transparent',
      },
      _focus: {
        background: 'transparent',
      },
    },
  },
};

// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ variants });
