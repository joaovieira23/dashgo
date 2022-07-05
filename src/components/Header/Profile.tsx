import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
    return (
        <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>João Andrade</Text>
                        <Text color="gray.300" fontSize="small">
                            joaovictorvieira.23@hotmail.com
                        </Text>
                    </Box>

                    <Avatar size="md" name="João Andrade" src="https://github.com/joaovieira23.png" />
                </Flex>
    );
}