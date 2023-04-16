import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box h="60px" p='10px'>
      <Flex fontWeight="600" gap="40px" align="center">
        <Text fontSize="25px">Number Game |</Text>
        <Link to="/">
          <Text _hover={{ color: "red" }}>Home</Text>
        </Link>
        <Link to="/leaderboard">
          <Text _hover={{ color: "red" }}>Leaderboard</Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
