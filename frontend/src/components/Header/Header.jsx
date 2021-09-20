import { Avatar, AvatarGroup } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { AiOutlineGithub, AiOutlineSearch } from 'react-icons/ai';
import Path from './Path';
import profileIcon1 from './placeholder_icon1.png';
import profileIcon2 from './placeholder_icon2.png';

function Header() {
  return (
    <>
      <Path></Path>
      <Flex pl="12" pt="2" pr="12" w="full" h="16">
        <Box ml="1">
          <Text fontSize="3xl">Kanban Board</Text>
        </Box>
        <Box ml="auto" mr="1">
          <Button leftIcon={<AiOutlineGithub />} colorScheme="black" variant="outline" size="md">
            Github Repo
          </Button>
        </Box>
      </Flex>
      <Flex pl="12" pt="2" pr="12" w="full" h="16">
        <Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineSearch color="gray.300" />}
            />
            <Input type="text" placeholder="Enter Search term" />
          </InputGroup>
        </Box>
        <Box ml="3">
          <AvatarGroup size="md" max={2}>
            <Avatar name="Ryan Florence" src={profileIcon1} />
            <Avatar name="Segun Adebayo" src={profileIcon2} />
            <Avatar name="Ryan Florence" src={profileIcon1} />
            <Avatar name="Segun Adebayo" src={profileIcon2} />
          </AvatarGroup>
        </Box>
        <Stack ml='4' spacing={4} direction="row" align="center">
       
          <Button colorScheme="gray" variant='outline' size="md">
            Only my issues
          </Button>
        </Stack>
      </Flex>
    </>
  );
}

export default Header;