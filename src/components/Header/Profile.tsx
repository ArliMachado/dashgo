import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Arli Machado</Text>
          <Text color="gray.300" fontSize="small">
            arli.machado@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Arli Machado"
        src="https://github.com/ArliMAchado.png"
      />
    </Flex>
  );
}
