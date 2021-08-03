import styled from "styled-components";
import { useState } from "react";

interface Props {
  img: string;
}

const Photo = ({ img }: Props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Image
      clicked={clicked}
      src={img}
      onClick={() => setClicked(!clicked)}
      onLoad={() => console.log("imgloaded")}
    />
  );
};

export default Photo;

const Image = styled.img<{ clicked: boolean }>`
  /* width: ${({ clicked }) => (clicked ? "1250px" : "28rem")};
  height: ${({ clicked }) => (clicked ? "auto" : "28rem")}; */
  width: 100%;
  aspect-ratio: 1;

  object-fit: cover;
  border-radius: 24px;
  transition: all 0.4s ease;

  position: ${({ clicked }) => clicked && "absolute"};
  z-index: ${({ clicked }) => clicked && "50"};

  &:hover {
    transform: scale(1.01) translate(2px, -2px);
    box-shadow: -4px 4px 15px 1px rgba(0, 0, 0, 0.125);
  }
`;
