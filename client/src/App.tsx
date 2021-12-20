import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import MainRoutes from './routes/MainRoutes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
