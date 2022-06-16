import { FC } from "react";
import { Text, Center, Heading, Button, VStack } from "@chakra-ui/react";
import { SiDiscord } from "react-icons/si";
export const LoginBody: FC = () => {
  return (
    <>
      {" "}
      <Center pt={200}>
        <Heading as="h2" size="xl">
          Login
        </Heading>
      </Center>
      <VStack spacing={15} pt={30}>
        <Button
          variant="outline"
          leftIcon={<SiDiscord />}
          borderColor="gray.500"
          size="lg"
        >
          Login
        </Button>
        <Text>note: noelle please add an auth system later. use with api </Text>
      </VStack>
    </>
  );
};
