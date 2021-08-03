import styled from "styled-components";
import { useState } from "react";

interface Props {
  img: string;
}

const Photo = ({ img }: Props) => {
  const [clicked, setClicked] = useState(false);

  return <Image clicked={clicked} src={img} onClick={() => setClicked(!clicked)} />;
};

export default Photo;

const Image = styled.img<{ clicked: boolean }>`
  /* width: ${({ clicked }) => (clicked ? "1250px" : "28rem")};
  height: ${({ clicked }) => (clicked ? "auto" : "28rem")}; */
  width: 100%;
  /* height: 100%; */
  aspect-ratio: 1;

  /* @media (max-width: 1300px) {
    width: calc(125px + 8vw);
    height: calc(125px + 8vw);
  }

  @media (max-width: 950px) {
    width: calc(150px + 10vw);
    height: calc(150px + 10vw);
  } */

  object-fit: cover;
  border-radius: 24px;
  /* margin-bottom: 4rem; */
  transition: all 0.4s ease;

  position: ${({ clicked }) => clicked && "absolute"};
  z-index: ${({ clicked }) => clicked && "50"};

  &:hover {
    transform: scale(1.01) translate(2px, -2px);
    box-shadow: -4px 4px 15px 1px rgba(0, 0, 0, 0.125);
  }
`;
