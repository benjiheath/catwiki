import styled from "styled-components";
import { CgArrowLongRight } from "react-icons/cg";

interface props {
  text: string;
  m?: string;
}

const Button = ({ text, m }: props) => {
  return (
    <Btn m={m}>
      {text}
      <CgArrowLongRight />
    </Btn>
  );
};

export default Button;

const Btn = styled.button<{ m?: string }>`
  text-transform: uppercase;
  background-color: transparent;
  font-size: 1.8rem;
  font-weight: 700;
  border-style: none;
  color: #29150799;
  line-height: 2.2rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;
  transition: all 0.4s;

  @media (max-width: 750px) {
    font-size: 12px;
  }

  &::after {
    opacity: 0;
    content: "";
    position: absolute;
    display: inline-block;
    width: 1%;
    height: ${({ m }) => (m === "0 0 1.5rem" ? "3px" : "2px")};
    background-color: #29150799;
    border-radius: 6px;
    top: 2.5rem;
    right: ${({ m }) => m === "0 0 1.5rem" && "0"};
    transition: all 0.4s;
    z-index: 5;
  }

  svg {
    margin-left: 1rem;
    transition: all 0.4s;
  }

  margin: ${({ m }) => m};

  &:hover {
    svg {
      margin-left: 2rem;
    }

    &::after {
      opacity: 1;
      width: 100%;
    }
  }
`;
