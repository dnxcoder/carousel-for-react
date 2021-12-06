import React, { useCallback, useState } from "react";

import {
  AnimatedContainer,
  Container,
  Dot,
  DotsContainer,
  Image,
  ItemContainer,
  LeftButton,
  RightButton,
} from "./styles";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

interface carouselProps {
  itemStyle: {
    width: number;
    height: number;
    colorBase: string;
  };

  images: string[];
}

const Carousel: React.FC<carouselProps> = ({ images, itemStyle }) => {
  const middleItem = Math.ceil(images.length / 2);

  const [carouselPosition, setCarouselPosition] = useState(0);
  const [indexActive, setIndexActive] = useState(middleItem);

  const handleMoveToRight = useCallback(() => {
    if (indexActive < images.length) {
      setCarouselPosition((oldState) => {
        const newPosition = oldState - itemStyle.width;

        return newPosition;
      });
      setIndexActive(indexActive + 1);
    }
  }, [itemStyle.width, indexActive, images.length]);

  const handleMoveToLeft = useCallback(() => {
    if (indexActive - 1 > 0) {
      setCarouselPosition((oldState) => {
        const newPosition = oldState + itemStyle.width;

        return newPosition;
      });
      setIndexActive(indexActive - 1);
    }
  }, [itemStyle.width, indexActive]);

  const handleChangeLocationByDot = useCallback(
    (index: number) => {
      let newCarouselPosition = 0;
      if (index > middleItem) {
        newCarouselPosition = (-index + middleItem) * itemStyle.width;
      } else if (index === middleItem) {
        newCarouselPosition = 0;
      } else if (index < middleItem) {
        newCarouselPosition = (middleItem - index) * itemStyle.width;
      }
      setIndexActive(index);
      setCarouselPosition(newCarouselPosition);
    },
    [middleItem, itemStyle.width]
  );

  return (
    <Container>
      <AnimatedContainer
        moveX={carouselPosition}
        totalWidth={itemStyle.width * images.length}
      >
        {images.map((item, index) => {
          return (
            <ItemContainer
              onClick={() => handleChangeLocationByDot(index + 1)}
              width={itemStyle.width}
              height={itemStyle.height}
              colorBase={itemStyle.colorBase}
              active={indexActive === index + 1 ? true : false}
            >
              <Image backgroundURL={item} />
            </ItemContainer>
          );
        })}
      </AnimatedContainer>
      <DotsContainer>
        {images.map((item, index) => {
          return (
            <Dot
              onClick={() => handleChangeLocationByDot(index + 1)}
              active={indexActive === index + 1 ? true : false}
            ></Dot>
          );
        })}
      </DotsContainer>
      <LeftButton onClick={handleMoveToLeft}>
        <FaChevronCircleLeft size={52} color="white" />
      </LeftButton>
      <RightButton onClick={handleMoveToRight}>
        <FaChevronCircleRight size={52} color="white" />
      </RightButton>
    </Container>
  );
};

export default Carousel;
