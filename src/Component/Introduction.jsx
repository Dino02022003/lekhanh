import { Container, Text, Box } from '@chakra-ui/react'
import React from 'react'

function Introduction() {
  return (
    <>
    <Container w="full">
        <Box>
            <Text align="center" justifyContent="center" p={10} fontSize="35px" fontWeight="bold" w="full">
                GIỚI THIỆU VỀ CỜ VUA
            </Text>
        </Box>
        <Box>
            <Text>
                Chào mừng các bạn ghé thăm website
            </Text>
        </Box>
    </Container>
    </>
  )
}

export default Introduction