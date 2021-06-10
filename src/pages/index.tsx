import { Box, Flex, Image, Stack, Text, Divider } from '@chakra-ui/react';

import styles from './styles.module.scss';
import { Header } from '../components/Header';
import { Travel } from '../components/Travel';
import { TravelItem } from '../components/Travel/TravelItem';
import { Slider } from '../components/Slider/Index';

export default function Home() {
  return (
    <Flex direction="column" w={1440} mx="auto">
      <Header />

      <Image src="/Banner.png" />

      <Travel />

      <Box
        bgColor="dark.headingAndText"
        w={90}
        height={0.5}
        mx="auto"
        mt="20"
      ></Box>

      <Stack
        fontSize="36"
        align="center"
        fontWeight="500"
        lineHeight="1.3"
        mt="16"
      >
        <Text>Vamos nessa?</Text>
        <Text>Então escolha o seu continente</Text>
      </Stack>

      <Slider />
    </Flex>
  );
}
