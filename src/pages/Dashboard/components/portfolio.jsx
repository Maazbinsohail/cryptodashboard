import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { RiLuggageDepositLine } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";

const Portfolio = () => {
  return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6" spacing="16">

    <HStack>
    <Stack>
    <HStack color="black.80">
      <Text fontSize="sm">Total Portfolio Value </Text>
      <Icon as={AiTwotoneExclamationCircle} />
    </HStack> 
    <Text textStyle="h2 " fontWeight="bold">
      {" "}
      RS 112,312,22{" "}
    </Text>
  </Stack>
  <Stack>
    <HStack color="black.80">
      <Text fontSize="sm">Walllet Balance </Text>
    </HStack>
    <HStack>
      <HStack>
        <Text textStyle="h2 " fontWeight="bold">
          {" "}
          $ 66980.75
        </Text>
        <Tag>BTC</Tag>
      </HStack>
      <HStack>
        <Text textStyle="h2 " fontWeight="bold">
          {" "}
          $ 224566.6
        </Text>
        <Tag>PKR</Tag>
      </HStack>
    </HStack>
  </Stack>
    </HStack>

     <HStack> 
        <Button  leftIcon={<Icon as={RiLuggageDepositLine} />} > Deposit</Button>
        <Button leftIcon={<Icon as={BiMoneyWithdraw} />}>  Withdraw</Button>

     </HStack>

    </HStack>
  );
};

export default Portfolio;
