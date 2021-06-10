import { Flex, Image, Stack, Text } from '@chakra-ui/react';

export function CityCard() {
  return (
    <Stack
      width={256}
      height={279}
      border="1px"
      borderColor="yellow.hightlight"
      borderRadius="5"
      spacing="5"
      mr="12"
      mb="10"
    >
      <Image src="/images/city-photos/Foto.png" />
      <Flex direction="row" justify="space-between" px="5">
        <Stack>
          <Text fontSize="20" fontWeight="semibold">
            Londres
          </Text>
          <Text fontSize="16">Reino Unido</Text>
        </Stack>
        <Image src="/images/city-flags/uk.png" h={30} w={30} mt="4" />
      </Flex>
    </Stack>
  );
}
