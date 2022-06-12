import { FC } from 'react'
import NextLink from 'next/link'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Heading, 
    Center, 
    VStack, 
    HStack,
    Button,
    Text
} from '@chakra-ui/react'
import { SiGithub, SiDiscord } from 'react-icons/si'


export const MainBody: FC = () => {
    return (
        <>
            <Center>
                <VStack spacing={25} mx={150}>
                <Heading pt={100} size='2xl'>The Multipurpose bot built with freedom and choice</Heading>
                <Text fontSize='xl' align="center">Kumiko is a Discord bot designed for flexibility and choice. Configure your own commands (coming soon), build an empire with economy-like features, and much much more.</Text>
                <HStack spacing={15} pt={30}>
                
                <Popover>
                <PopoverTrigger>
                <Button variant="outline" leftIcon={<SiDiscord/>} borderColor='gray.500'  size="lg">Invite</Button>
                </PopoverTrigger>
                <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Whoa there !</PopoverHeader>
                      <PopoverBody>Kumiko is not ready for production, and thus not ready for any invites yet</PopoverBody>
                    </PopoverContent>
                </Popover>
                </HStack>
                </VStack>
                

            
            

            </Center>
            
        </>
    )
}