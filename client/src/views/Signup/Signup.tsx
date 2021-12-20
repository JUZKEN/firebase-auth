import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  FormControl,
  Input,
  Box,
  Flex,
  Heading,
  Button,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';

function Signup() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setErrors('');
    } catch(e) {
      setErrors((e as Error).message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    if (currentUser) navigate('/');
  }, [currentUser]);

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Box backgroundColor="gray.800" borderRadius="xl" p="5" mb="5" w="400px" maxW="100%">
        <Heading size="lg" mb="4">Signup</Heading>
        {errors &&
          <Box mb="4" p="3" borderRadius="lg" bgColor="red.200" color="red.600">
            {errors}
          </Box>
        }
        <FormControl mb='5'>
          <InputGroup size='md' mb='4'>
            <Input type='email' id="email" placeholder='Enter email' onChange={e => setEmail(e.target.value)} />
          </InputGroup>
          <InputGroup size='md'>
            <Input pr='4.5rem' type={show ? 'text' : 'password'} id="password" placeholder='Enter password' onChange={e => setPassword(e.target.value)} />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button isLoading={isLoading} type="submit" onClick={handleSubmit} w="full">Signup</Button>
      </Box>
    </Flex>
  );
}

export default Signup;