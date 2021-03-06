import { FC } from "react";
import NextLink from "next/link";
import { VStack, HStack, Text, Link } from "@chakra-ui/react";
import { SiNextdotjs, SiChakraui, SiFastapi } from "react-icons/si";

export const IndexFooter: FC = () => {
  return (
    <>
      <VStack pt={100}>
        <Text>Built with</Text>
        <HStack spacing={15}>
          <SiNextdotjs size={24} />
          <SiChakraui size={24} />
          <SiFastapi size={24} />
        </HStack>
        <HStack spacing={25}>
          <NextLink href="/terms-of-service" passHref>
            <Link pt={25}>Terms of service</Link>
          </NextLink>
          <NextLink href="/privacy-policy" passHref>
            <Link pt={25}>Privacy Policy</Link>
          </NextLink>
        </HStack>
        <Text pt={5} pb={50} align="center">
          © 2022 - Licensed under GPL-3.0
        </Text>
      </VStack>
    </>
  );
};
