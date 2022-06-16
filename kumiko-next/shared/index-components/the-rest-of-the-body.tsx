import { FC } from 'react';
import { Text, Center, Heading, Button, VStack, HStack,  Img, Container, Box, Flex, Spacer, SimpleGrid } from '@chakra-ui/react';

export const TheRestOfTheBody: FC = () => {
    return (
        <>

<Flex color='white' direction="column">
    
        
        <Box w='100%' h={500} color='white' pt={25}>
        <Flex color='white' direction="row">
        <Container pt={150}>
          <VStack spacing={15}>
            <Heading as="h4" size="lg">Built on top of Rin</Heading>
            <Text align="center">Kumiko is built on top of another project, Rin. With Rin, built in, you get access to 15+ services integrated right in Discord!</Text>
          </VStack>
        </Container>
        <Container pt={100}>
        <Img src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Container>
        </Flex>
        
        
        </Box>
        
        <Box w='100%' h={500} color='white' pt={150}>
        <Flex color='white' direction="row">
        <Container pt={75}>
        {/* TODO: REPLACE THE IMAGE !!!*/}
        <Img src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Container>
        <Container pt={150}>
          <VStack spacing={15}>
            <Heading as="h4" size="lg">A completely Opt in economy </Heading>
            <Text align="center">Kumiko uses a opt-in economy, where you, the user, can choose if you want to use it or not.</Text>
          </VStack>
        </Container>
        
        </Flex>
        
        
        </Box>

        <Box w='100%' h={500} pt={150} color='white'>
        <Flex color='white' direction="row">
        <Container pt={150}>
          <VStack spacing={15}>
            <Heading as="h4" size="lg">A customizable web dashboard</Heading>
            <Text align="center">With Kumiko's web dashboard, you can gain control over Kumiko.</Text>
          </VStack>
        </Container>
        <Container pt={100}>
        <Img src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Container>
        </Flex>
        
        
        </Box>

        <Box w='100%' h={500} color='white' pt={150}>
        <Flex color='white' direction="row">
        <Container pt={75}>
        {/* TODO: REPLACE THE IMAGE !!!*/}
        <Img src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Container>
        <Container pt={150}>
          <VStack spacing={15}>
            <Heading as="h4" size="lg">Completely open source!</Heading>
            <Text align="center">Unlike most of the popular bots (MEE6, Probot, etc), which are closed source, Kumiko is completely open source. Kumiko is licensed under Apache-2.0, and thus gives you more power to expand and build</Text>
          </VStack>
        </Container>
        
        </Flex>
        
        
        </Box>


</Flex>

        </>
    );
}