import {
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Container } from 'next/app';
import { CityCard } from '../../components/CityCard';
import { Header } from '../../components/Header';

export default function Continent() {
  return (
    <Flex direction="column" w={1440} mx="auto">
      <Header />

      <Image src="/images/continents-banner/europa.png" />

      <Box maxWidth={1340}>
        <SimpleGrid columns={2} w="100%" spacing="8" mt="35">
          <Box fontSize="24" p="8" textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Box>
          <Flex justify="space-around" alignItems="center">
            <Stack fontWeight="semibold" alignItems="center">
              <Text color="yellow.hightlight" fontSize="48">
                50
              </Text>
              <Text fontSize="24">países</Text>
            </Stack>
            <Stack fontWeight="semibold" alignItems="center">
              <Text color="yellow.hightlight" fontSize="48">
                60
              </Text>
              <Text fontSize="24">línguas</Text>
            </Stack>
            <Stack fontWeight="semibold" alignItems="center">
              <Text color="yellow.hightlight" fontSize="48">
                27
              </Text>
              <Text fontSize="24">cidades +100</Text>
            </Stack>
          </Flex>
        </SimpleGrid>

        <Text fontSize="36" ml="8" mb="30" mt="30">
          Cidades +100
        </Text>

        <Flex wrap="wrap" width={1340} ml="8">
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
        </Flex>
      </Box>
    </Flex>
  );
}
