import { FC } from "react";
import {
  Text,
  Heading,
  VStack,
  Img,
  Container,
  Box,
  Flex,
} from "@chakra-ui/react";

export const TheRestOfTheBody: FC = () => {
  return (
    <>
      <Flex color="white" direction="column">
        <Box w="100%" h={500} color="white" pt={25}>
          <Flex color="white" direction="row">
            <Container pt={150}>
              <VStack spacing={15}>
                {/* @ts-ignore*/}
                <Heading as="h4" size="lg" align="center">
                  Built on top of Rin
                </Heading>
                <Text align="center">
                  Kumiko is built on top of another project, Rin. With Rin,
                  built in, you get access to 15+ services integrated right in
                  Discord!
                </Text>
              </VStack>
            </Container>
            <Container pt={100}>
              <Img
                src="https://raw.githubusercontent.com/No767/Kumiko-Site/dev/kumiko-next/assets/undraw_building_blocks_re_5ahy.svg"
                alt="Dan Abramov"
              />
            </Container>
          </Flex>
        </Box>

        <Box w="100%" h={500} color="white" pt={150}>
          <Flex color="white" direction="row">
            <Container pt={75}>
              {/* TODO: REPLACE THE IMAGE !!!*/}
              <Img
                src="https://raw.githubusercontent.com/No767/Kumiko-Site/dev/kumiko-next/assets/undraw_investing_re_bov7.svg"
                alt="Dan Abramov"
              />
            </Container>
            <Container pt={150}>
              <VStack spacing={15}>
                {/* @ts-ignore*/}
                <Heading as="h4" size="lg" align="center">
                  A completely Opt in economy{" "}
                </Heading>
                <Text align="center">
                  Kumiko uses a opt-in economy, where you, the user, can choose
                  if you want to use it or not. And it's extremely powerful,
                  with features like jobs, and ways to earn in-game coins with
                  the marketplace
                </Text>
              </VStack>
            </Container>
          </Flex>
        </Box>

        <Box w="100%" h={500} pt={150} color="white">
          <Flex color="white" direction="row">
            <Container pt={150}>
              <VStack spacing={15}>
                {/* @ts-ignore*/}
                <Heading as="h4" size="lg" align="center">
                  A customizable web dashboard
                </Heading>
                <Text align="center">
                  With Kumiko's web dashboard, you can gain control over Kumiko.
                  View your stats, create custom embeds, and much much more! But
                  here's a catch! It's a paid feature
                </Text>
              </VStack>
            </Container>
            <Container pt={100}>
              <Img
                src="https://raw.githubusercontent.com/No767/Kumiko-Site/dev/kumiko-next/assets/undraw_dashboard_re_3b76.svg"
                alt="Dan Abramov"
              />
            </Container>
          </Flex>
        </Box>

        <Box w="100%" h={500} color="white" pt={150}>
          <Flex color="white" direction="row">
            <Container pt={75}>
              {/* TODO: REPLACE THE IMAGE !!!*/}
              <Img
                src="https://raw.githubusercontent.com/No767/Kumiko-Site/dev/kumiko-next/assets/undraw_version_control_re_mg66.svg"
                alt="Dan Abramov"
              />
            </Container>
            <Container pt={150}>
              <VStack spacing={15}>
                {/* @ts-ignore*/}
                <Heading as="h4" size="lg" align="center">
                  Completely open source!
                </Heading>
                <Text align="center">
                  Unlike most of the popular bots (MEE6, Probot, Hydra, etc),
                  which are closed source, Kumiko is completely open source.
                  Kumiko is licensed under Apache-2.0, and thus gives you more
                  power to expand and build.
                </Text>
              </VStack>
            </Container>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
