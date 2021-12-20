import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from './styles';

// Color style overrides
import colors from './colors';

const theme = extendTheme({
   styles,
   colors,
   config: {
      useSystemColorMode: false,
      initialColorMode: "dark",
   },
});

export default theme;