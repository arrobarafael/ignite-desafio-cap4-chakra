import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import { background, Image } from '@chakra-ui/react';

SwiperCore.use([Navigation]);

export function Slider() {
  return (
    <Swiper
      className="mySwiper"
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      style={{ width: '100%', flex: '1' }}
    >
      <SwiperSlide>
        <Image src="/images/slide/Continent.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/slide/Continent.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/slide/Continent.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/slide/Continent.png" />
      </SwiperSlide>
    </Swiper>
  );
}
