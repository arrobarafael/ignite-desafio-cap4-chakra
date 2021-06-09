import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex align="center" justify="center" h={100}>
      <Image src="./Logo.png" w={184} h={46} />
    </Flex>
  );
}
