import { TriangleUpIcon } from '@chakra-ui/icons';
import {
  Avatar, Flex, Kbd, Text
} from '@chakra-ui/react';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import profileIcon from './placeholder_icon.png';

function Task(props) {
  return (
    <Draggable draggableId={props.task.id.toString()} index={props.index}>
      {(provided, snapshot) => (
        <Flex
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          bg="white"
          direction="column"
          _hover={{
            bg: 'gray.50',
          }}
          border="1px"
          borderRadius="4"
          borderColor="gray.200"
          m={1}
          minH="24"
          h="auto"
          boxShadow="base"
        >
          <Text fontSize="md" fontWeight="medium" textAlign="left" mb="3">
            {props.task.title}
          </Text>
          <Flex mt="auto" pb="2" pl="2" pr="2" sx={{ gap: '5px' }}>
            <TriangleUpIcon mt="1.5" color="green" />

            <span>
              <Kbd>13</Kbd>
            </span>
            <Avatar ml="auto" name="Eva" size="sm" src={profileIcon} />
          </Flex>
        </Flex>
      )}
    </Draggable>
  );
}

export default Task;
