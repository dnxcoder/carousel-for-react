import styled from "styled-components";

interface itemProps {
  width: number;
  height: number;
  colorBase: string;
  active: boolean;
}

interface imageProps {
  backgroundURL: string;
}

interface AnimatedContainerProps {
  moveX: number;
  totalWidth:number;
}

interface ActiveDot {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;
  width: 100%;
  align-items: center;
  
`;

export const AnimatedContainer = styled.div<AnimatedContainerProps>`

  display: flex;
  flex-direction: row;
  justify-content: center;
  width: ${(props)=> `${props.totalWidth}px`};
  transform: ${(props) => `translateX(${props.moveX}px)`};
  transition: 0.5s ease-out;
`;

export const ItemContainer = styled.div<itemProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color}px;
  transform: ${(props) => props.active && `scale(1.2)`};
  z-index: ${(props) => (props.active ? 10 : 0)};
  transform-origin: bottom;
  background-color: purple;
  margin: 2px;
  transition: 0.5s ease-out;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: tomato;
    opacity: ${(props) => (props.active ? 0 : 0.7)};
    position: absolute;
    transition: 0.5s ease-out;
  }
`;

export const Image = styled.div<imageProps>`
  width: 100%;
  height: 100%;
  background-color: yellow;
  background-image: ${(props) => `url(${props.backgroundURL})`};
  background-size: cover;
  background-position: center;
`;

export const LeftButton = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const RightButton = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const DotsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.div<ActiveDot>`
  margin-left: 10px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 50px;
  width: ${(props) => (props.active ? `20px` : `10px`)};
  height: ${(props) => (props.active ? `20px` : `10px`)};
  background-color: tomato;
  transition: 0.5s ease-out;
`;
