import React from "react";
import { Box, Stack, HStack } from "@chakra-ui/react";
import SideNav from "./SideNav";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <HStack
        mt="6"
        borderRadius="xl"
        height="60px"
        bg="#D3D3D3"
        justifyContent="center"
      >
        <SideNav />
        <Navbar />
      </HStack>
    </>
  );
};

export default Dashboard;
