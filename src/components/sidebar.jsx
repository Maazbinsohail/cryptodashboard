import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FcCurrencyExchange } from "react-icons/fc";
import { MdSpaceDashboard } from "react-icons/md";
import { FcDataEncryption } from "react-icons/fc";
import { MdOutlineSupportAgent } from "react-icons/md";

const Sidebar = () => {
  const navLinks = [
    {
      icon: MdSpaceDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: FcCurrencyExchange,
      text: "Transcations",
      link: "/transcation",
    },
  ];
  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base:"none",
        lg:"lg",
      }}
      w={{
        base:"full",
        lg:"16rem"
      }}
      h="100vh"

    >
      <Box>
        <Heading textAlign="center" as="h1" fontSize="20px" pt="3.5rem" mx="3">
          <Icon as={FcDataEncryption} /> Bitget
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack
              key={nav.text}
              py="3"
              px="4"
              borderRadius="10px"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <HStack
          py="3"
          px="4"
          borderRadius="10px"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
        >
          <Icon as={MdOutlineSupportAgent} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidebar;
