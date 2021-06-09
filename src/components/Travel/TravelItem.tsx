import { Flex, Image, Text } from '@chakra-ui/react';

interface TravelItemProps {
  image: string;
  description: string;
}

export function TravelItem({ image, description }: TravelItemProps) {
  return (
    <Flex
      direction="column"
      h={145}
      alignItems="center"
      justifyContent="space-between"
    >
      <Image src={image} />
      <Text fontWeight="semibold" color="dark.headingAndText" fontSize="24">
        {description}
      </Text>
    </Flex>
  );
}
