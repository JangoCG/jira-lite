import React from 'react'
import { Box, Text } from '@chakra-ui/layout'


function Path() {
    return (
        <Box mt="5" ml="14">
        <Text sx={{ display: 'inline' }} fontSize="lg" display="inline" textColor="gray.600">
          Projects
        </Text>
        <Text as="span" mx="3">
          /
        </Text>
        <Text sx={{ display: 'inline' }} fontSize="lg" textColor="gray.600">
          Jango 1.0
        </Text>
        <Text as="span" mx="3">
          /
        </Text>
        <Text sx={{ display: 'inline' }} fontSize="lg" textColor="gray.600">
          Kanban Board
        </Text>
      </Box>
    )
}

export default Path
