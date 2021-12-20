import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import { auth } from '../../firebase';

function Home() {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Stack>
        <Heading>Home</Heading>
        <Button onClick={handleLogout}>Logout</Button>
      </Stack>
    </Flex>
  );
}

export default Home;