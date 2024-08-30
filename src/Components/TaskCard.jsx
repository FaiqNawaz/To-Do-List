import { Box, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { RiTaskLine } from "react-icons/ri";
import Form from "./Form";

const TaskCard = ({ task }) => {
  return (
    <Box
      key={task.id}
      bg="yellow.100"
      display="flex"
      alignItems="center"
      width="800px"
      justifyContent="space-between"
      borderRadius="10px"
    >
      <Box display="flex" alignItems="center" gap="3">
        <Icon as={RiTaskLine} fontSize="32px"></Icon>
        <Box>
          <Heading as="h5">{task.Title}</Heading>
          <p>{task.Description}</p>
        </Box>
      </Box>

      <Box fontSize="28px">
        <Icon as={CiEdit} onClick={Form} cursor="pointer" />
        <Icon as={MdDelete} />
      </Box>
    </Box>
  );
};

export default TaskCard;
