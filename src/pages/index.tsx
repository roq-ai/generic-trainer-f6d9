import { Button, Flex, Heading, Image, Text, Stack, useBreakpointValue, Box, Link } from '@chakra-ui/react';

import { signIn, signUp, requireNextAuth } from '@roq/nextjs';

import Head from 'next/head';
import { HelpBox } from 'components/help-box';

function HomePage() {
  return (
    <>
      <Head>
        <title>{`Generic Trainer`}</title>

        <meta
          name="description"
          content="Welcome to Generic Trainer - Your one-stop solution for comprehensive course creation. From topic addition, unique URL generation, automatic content creation, to quiz and programming exercise setup, we've got you covered. Experience the ease of use cases and practical uses generation with our advanced ChatGPT API integration."
        />
      </Head>

      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack position="relative" spacing={6} w={'full'} maxW={'lg'}>
            <HelpBox />
            <Image src="/roq.svg" alt="Logo" w="150px" mb="8" />
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text as={'span'}>Explore</Text>{' '}
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'cyan.400',
                  zIndex: -1,
                }}
              >
                {`Generic Trainer`}
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              {`Welcome to Generic Trainer - Your one-stop solution for comprehensive course creation. From topic addition, unique URL generation, automatic content creation, to quiz and programming exercise setup, we've got you covered. Experience the ease of use cases and practical uses generation with our advanced ChatGPT API integration.`}
            </Text>
            <Stack direction="column" spacing={4} className="roles-container">
              <Text>Trainer</Text>
              <Stack className="owner-roles-container" direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  rounded={'full'}
                  bg={'cyan.500'}
                  color={'white'}
                  _hover={{
                    bg: 'cyan.700',
                  }}
                  onClick={() => signUp('trainer')}
                >
                  Create Account
                </Button>
                <Button rounded={'full'} onClick={() => signIn('trainer')}>
                  Login
                </Button>
              </Stack>

              <Text>Student</Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  rounded={'full'}
                  bg={'cyan.500'}
                  color={'white'}
                  _hover={{
                    bg: 'cyan.700',
                  }}
                  onClick={() => signUp('student')}
                >
                  Register
                </Button>
                <Button rounded={'full'} onClick={() => signIn('student')}>
                  Login
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Flex>
        <Flex position="relative" flex={1}>
          <Image
            src={
              'https://images.unsplash.com/photo-1472220625704-91e1462799b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjA3NjB8MHwxfHNlYXJjaHwxfHxlLWxlYXJuaW5nJTJDcHJvZ3JhbW1pbmd8ZW58MHx8fHwxNjg4MDg0NTg3fDA&ixlib=rb-4.0.3&q=80&w=1080'
            }
            alt={'Login Image'}
            objectFit={'cover'}
          />
          <Box position="absolute" top="0" backgroundColor="rgba(0,0,0,0.6)" width="100%" py="2">
            <Text align="center" fontSize="sm" color="white">
              Photo by{' '}
              <Link
                href="https://unsplash.com/ja/@steinart?utm_source=roq-generator&utm_medium=referral"
                isExternal
                color="teal.200"
              >{`Steinar Engeland`}</Link>{' '}
              on{' '}
              <Link
                href="https://unsplash.com/?utm_source=roq-generator&utm_medium=referral"
                isExternal
                color="teal.200"
              >
                Unsplash
              </Link>
            </Text>
          </Box>
        </Flex>
      </Stack>
    </>
  );
}

export default requireNextAuth({
  redirectIfAuthenticated: true,
  redirectTo: '/users',
})(HomePage);
