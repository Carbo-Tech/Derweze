import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box
      position="fixed"
      left="0"
      top="60px"
      bottom="60px"
      width="200px"
      bg="gray.100"
      padding="20px"
    >
      <Heading as="h2" size="md" marginBottom="10px">
        Navigation
      </Heading>
      <List spacing={3}>
        <ListItem>
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/about">About</Link>
        </ListItem>
        <ListItem>
          <Link href="/contact">Contact</Link>
        </ListItem>
      </List>
    </Box>
  );
}
