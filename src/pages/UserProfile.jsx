import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';


export default function UserProfile() {
    const location = useLocation();
    const { firstName, lastName, email } = location.state
    console.log(location.state)
    return (

        <div>
            <Box
                w={['full', 'md']}
                p={[8, 10]}
                mt={[20, '10vh']}
                mx='auto'
                border={['none', '1px']}
                borderColor={['', 'gray.300']}
                borderRadius={10}
                boxShadow='2xl'>
                <Heading as="h3" size="2xl" color="orange" textAlign="center" mb={6}>Profile</Heading>
                <VStack>
                    <HStack>
                        <Text fontSize='xl' as='b'>First Name: </Text>
                        <Text fontSize='xl' as='i'>{firstName} </Text>
                    </HStack>
                    <HStack>
                        <Text fontSize='xl' as='b'>Last Name: </Text>
                        <Text fontSize='xl' as='i'>{lastName} </Text>
                    </HStack>
                    <HStack>
                        <Text fontSize='xl' as='b'>Email: </Text>
                        <Text fontSize='xl' as='i'>{email} </Text>
                    </HStack>
                </VStack>
            </Box>
        </div>

    )
}

