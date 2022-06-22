import { FC } from "react";
import {
  Heading,
  VStack,
  HStack,
  Stat,
  StatNumber,
  StatLabel,
} from "@chakra-ui/react";

export const BottomSection: FC = () => {
  return (
    <>
      <VStack pt={250}>
        <Heading as="h2" size="xl">
          Then are u ready to join?
        </Heading>
        <HStack pt={15}>
          {/* @ts-ignore */}
          <Stat align="center">
            <StatLabel>Available Commands</StatLabel>
            <StatNumber>80+</StatNumber>
          </Stat>
          {/* @ts-ignore */}
          <Stat align="center">
            <StatLabel>Servers</StatLabel>
            <StatNumber>1+</StatNumber>
          </Stat>
        </HStack>
      </VStack>
    </>
  );
};
