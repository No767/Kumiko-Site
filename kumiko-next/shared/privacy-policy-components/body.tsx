import { FC } from "react";
import {
  Text,
  Heading,
  Container,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export const PrivacyPolicyBody: FC = () => {
  return (
    <>
      <Container maxW="100%" ps={25} pt={50}>
        <Heading>Privacy Policy</Heading>
        <Text pt={25}>
          Kumiko is designed to only use what it needs. This means no other
          data, unless specified, is used or granted to Kumiko, or any other
          staff and administration members. By using Kumiko, and in turn any of
          the services provided, you truthfully agree to follow such terms and
          conditions in exchange for use of Kumiko and their services. Those
          shall be stated as:
        </Text>
        <Heading as="h2" size="lg" pt={25}>
          Collections of interest
        </Heading>
        <Text pt={25}>
          Kumiko is designed to only take what the bot needs. The data will not
          be viewed by anyone else unless authorized to do so. The information
          collected as so is of the following:
        </Text>
        <UnorderedList mx={30} pt={25} spacing={15}>
          <ListItem>Discord user IDs</ListItem>
        </UnorderedList>
        <Text pt={25}>
          Kumiko and her services will only collect the info listed above.
          Kumiko does not collect IPs, and any other sensitive info unless
          needed
        </Text>
        <Heading as="h2" size="lg" pt={25}>
          Reasons for Collecting Info
        </Heading>
        <Text pt={25}>
          The info is only used to associate the Discord user with their economy
          account. The IDs are stored on a database, and are not viewed unless
          needed.
        </Text>
        <Heading as="h2" size="lg" pt={25}>
          Data Retention
        </Heading>
        <Text pt={25}>
          All data will be retained for as however long it is needed. If an user
          decides to create an economy account, the Discord ID of the user is
          stored, and purged when the user deletes his/her/their account. This
          applies to the web dashboard and other services as well.
        </Text>
        <Heading as="h2" size="lg" pt={25}>
          Data Sharing
        </Heading>
        <Text pt={25}>
          Kumiko does not share any information with anyone. Kumiko only shares
          info between her internal services (the web dashboard), and only
          between the services. All data can only be accessed by the owner of
          those bots.
        </Text>
        <Heading as="h2" size="lg" pt={25}>
          Request to Access Such Data
        </Heading>
        <Text pt={25}>
          If you feel the need to request for your own data for purposes of
          security only, please reach out to either the staff, or the owner
          directly. If you wish to remove such data, please also reach out to
          either the staff or the owner directly.
        </Text>
        <Heading as="h2" size="lg" pt={25}>
          Changes to this Policy
        </Heading>
        <Text pt={25}>
          The staff and the owner reserves the right to change this policy at
          any time. Any changes will be posted on the Discord server, and will
          be reflected on this page.
        </Text>
      </Container>
    </>
  );
};
