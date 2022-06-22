import { FC } from "react";
import NextLink from "next/link";
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
  Text,
  Box,
  Container,
} from "@chakra-ui/react";
import { SiGithub, SiDiscord } from "react-icons/si";
import { GrMoney } from "react-icons/gr";
import { GoDashboard } from "react-icons/go";
import { GiTakeMyMoney } from "react-icons/gi";

export const MainBody: FC = () => {
  return (
    <>
      <Center pb={150}>
        <VStack spacing={25} mx={150} align="center">
          {/* @ts-ignore*/}
          <Heading
            pt={100}
            size="2xl"
            orientation="horizontal"
            mx={50}
            // @ts-ignore
            align="center"
          >
            The Multipurpose bot built with freedom and choice
          </Heading>
          <Text fontSize="xl" align="center">
            Kumiko is a Discord bot designed for flexibility and choice.
            Configure your own commands (coming soon), build an empire with
            economy-like features, and much much more.
          </Text>
          <HStack spacing={15} pt={30}>
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="outline"
                  leftIcon={<SiDiscord />}
                  borderColor="gray.500"
                  size="lg"
                >
                  Invite
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Whoa there !</PopoverHeader>
                <PopoverBody>
                  Kumiko is not ready for production, and thus not ready for any
                  invites yet
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
          <HStack align="center" justify="center" spacing={275} pt={75}>
            <Container>
              <Center pb={25}>
                <GiTakeMyMoney size={50} style={{ color: "#cccccc" }} />
              </Center>
              <Text align="center" fontSize="xl">
                Build your empire
              </Text>
              <Text align="center" pt={25} mx={15}>
                Kumiko's Economy is designed to scale, just like your empire. Go
                ahead and sell on the marketplace!
              </Text>
            </Container>
            <Container>
              <Center pb={25}>
                <GoDashboard size={50} style={{ color: "#cccccc" }} />
              </Center>
              <Text align="center" fontSize="xl">
                Control literally everything
              </Text>
              <Text align="center" pt={25} mx={15}>
                Kumiko offers a web dashboard to create custom embeds, and
                control and view stats
              </Text>
            </Container>
            <Container>
              <Center pb={25}>
                <SiGithub size={50} style={{ color: "#cccccc" }} />
              </Center>
              <Text align="center" fontSize="xl">
                Completely free and Open Source
              </Text>
              <Text align="center" pt={25} mx={15}>
                Kumiko is also completely free, and compared to MEE6 and Probot
                and other bots, it's completely open source and free
              </Text>
            </Container>
          </HStack>
        </VStack>
      </Center>
    </>
  );
};
