import { Stack } from '@chakra-ui/layout';
import { TravelItem } from './TravelItem';

export function Travel() {
  return (
    <Stack
      align="flex-start"
      direction="row"
      justify="space-between"
      maxWidth={1160}
      w="100%"
      mx="auto"
      mt="16"
    >
      <TravelItem
        image="/images/travel-types/cocktail.png"
        description="vida noturna"
      />
      <TravelItem image="/images/travel-types/surf.png" description="praia" />
      <TravelItem
        image="/images/travel-types/building.png"
        description="moderno"
      />
      <TravelItem image="/images/travel-types/museum.png" description="praia" />
      <TravelItem
        image="/images/travel-types/earth.png"
        description="e mais..."
      />
    </Stack>
  );
}
