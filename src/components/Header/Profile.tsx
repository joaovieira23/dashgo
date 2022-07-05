import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
                    { showProfileData && (
                        <Box mr="4" textAlign="right">
                            <Text>João Andrade</Text>
                            <Text color="gray.300" fontSize="small">
                                joaovictorvieira.23@hotmail.com
                            </Text>
                        </Box>
                    ) }

                    <Avatar size="md" name="João Andrade" src="https://github.com/joaovieira23.png" />
                </Flex>
    );
}