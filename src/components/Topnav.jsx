import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RiUserFill } from "react-icons/ri";
import React from "react";
import { ImMenu3 } from "react-icons/im";

const Topnav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="70rem" justify="space-between" mx="auto" h="16">
        <Icon
          as={ImMenu3}
          fontSize={"20px"}
          display={{ base: "block", lg: "none" }}
          onClick={onOpen}
        />
        <Heading fontWeight="medium" fontSize={"28px"}>
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={RiUserFill} fontSize={"20px"} onClick={onOpen} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
