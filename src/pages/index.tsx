import { Box, Flex, Image, Stack, Text, Divider } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Travel } from '../components/Travel';
import { TravelItem } from '../components/Travel/TravelItem';

export default function Home() {
  return (
    <Flex direction="column" w={1440} mx="auto">
      <Header />

      <Image src="/Banner.png" />

      <Travel />

      <Divider />
    </Flex>
  );
}
