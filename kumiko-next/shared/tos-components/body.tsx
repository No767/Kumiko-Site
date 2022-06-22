import { FC } from "react";
import {
  Text,
  Heading,
  Container,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";

export const TOSBody: FC = () => {
  return (
    <>
      <Container maxW="100%" ps={25} pt={50}>
        <Heading>Terms of Service</Heading>
        <Text pt={25}>
          By using the services provided by Kumiko, and Rin, you agree to follow
          these terms stated below.
        </Text>
        <Heading as="h2" size="lg" pt={25}>
          TOS for Kumiko
        </Heading>
        <OrderedList mx={30} pt={25} spacing={15}>
          <ListItem>
            All users who wish to use Kumiko, and any of its features are
            subject to all terms and conditions mentioned within this page
          </ListItem>
          <ListItem>
            Upon registration with the approved providers, it means that
            he/she/they completely aggress with the terms and conditions
            mentioned, and any others that may be added
          </ListItem>
          <ListItem>
            Users may not exploit the marketplace or any of the economy based
            features. This means selling items that are named inappropriately
            (e.g names that imply sexual behavior, nsfw content, advertisement,
            etc) can get you banned from using any of Kumiko's services{" "}
          </ListItem>
          <ListItem>
            It is forbidden to sell any of the services and use it for
            unauthorized commercial use or in use of malicious gains
          </ListItem>
          <ListItem>
            Bribes for coins are forbidden. This can lead to severe punishments,
            including perma-bans
          </ListItem>
          <ListItem>
            Community support is available via GitHub Discussions and Issues,
            while commercial support is allowed via the discord server. DO NOT
            spam GitHub issues and/or discussions with spam comments, or
            reviews.{" "}
          </ListItem>
          <ListItem>
            It is completely possible that these terms of services can change at
            any time, or add new ones as needed. Please keep up to date with any
            announcements on the Discord server
          </ListItem>
        </OrderedList>
        <Heading as="h2" size="lg" pt={25}>
          TOS for Kumiko's Dashboard and Website
        </Heading>
        <OrderedList mx={30} pt={25} spacing={15}>
          <ListItem>
            All info should be ideally truthful. This is needed in order to
            provide accurate data to the user
          </ListItem>
          <ListItem>
            Upon registration with the approved providers, it means that
            he/she/they completely aggress with the terms and conditions
            mentioned, and any others that may be added
          </ListItem>
          <ListItem>
            It is forbidden to sell subscriptions to other people, and to sell
            any part of the website or any of its features to other people.
          </ListItem>
          <ListItem>
            It is forbidden to sell any of the services and use it for
            unauthorized commercial use or in use of malicious gains
          </ListItem>
          <ListItem>
            The owner and its staff claim no responsibilities if such users
            causes damage or losses to the client as a result of improper
            treatment of the site.
          </ListItem>
          <ListItem>
            It is against such terms of service to use the services provided to
            you against any law, which must legally bind to the sovereign nation
            or of the case of none, to the international laws, to cause harm or
            for malicious intents to the site, any providers of the site, and to
            any other person legally bound to such terms and conditions
          </ListItem>
          <ListItem>
            The owner, and thus any member of the administration team has the
            right to suspend any subscription or account of such client if
            he/she/they violates the terms and conditions of the site
          </ListItem>
          <ListItem>
            The client truthfully will acknownledge that the features, and
            services provided within this site cannot be used for purposes of
            any gain, or to cause physical, mental, or emotional harm of any
            kind to another user or such persons
          </ListItem>
        </OrderedList>
        <Text variant="bold" fontSize={28} pt={15}>
          If any of such rules are violated, such persons is required to expose
          themselves or such company for liability and prosecution by the
          administration of the site.{" "}
        </Text>
      </Container>
    </>
  );
};
