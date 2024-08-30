import {
  Box,
  Button,
  Center,
  Icon,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { AiOutlineMenu } from "react-icons/ai";

const SideNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Icon
        as={AiOutlineMenu}
        fontSize="24"
        alignItems="center"
        onClick={onOpen}
        ml="6"
      ></Icon>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideNav;
