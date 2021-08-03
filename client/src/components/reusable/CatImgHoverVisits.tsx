import styled from "styled-components";

interface Props {
  visits: number;
  hw: string;
  img: string;
}

const CatImgHoverVisits = ({ visits, hw, img }: Props) => {
  return (
    <ImgWrapper hw={hw}>
      <Visits>
        {visits} {visits > 1 ? "visits" : "visit"}
      </Visits>
      <Img src={img} hw={hw} />
    </ImgWrapper>
  );
};

export default CatImgHoverVisits; /*




*/ // Styling

const ImgWrapper = styled.div<{ hw: any }>`
  height: ${({ hw }) => hw};
  min-width: ${({ hw }) => hw};
  max-width: ${({ hw }) => hw};
  overflow: hidden;
  border-radius: 24px;
  margin-right: ${({ hw }) => (hw === "22rem" ? "5rem" : "0")};
  position: relative;

  &:hover {
    cursor: pointer;
    & img {
      transform: scale(1);
      filter: blur(2px) brightness(0.9);
    }

    & span {
      opacity: 1;
    }
  }

  @media (max-width: 1300px) {
    /* min-width: 17vw;
    max-width: 17vw;
    height: 17vw; */

    min-width: ${({ hw }) => hw !== "22rem" && "17vw"};
    max-width: ${({ hw }) => hw !== "22rem" && "17vw"};
    height: ${({ hw }) => hw !== "22rem" && "17vw"};
  }

  @media (max-width: 750px) {
    min-width: ${({ hw }) => hw !== "22rem" && "unset"};
    max-width: ${({ hw }) => hw !== "22rem" && "unset"};
    height: ${({ hw }) => hw !== "22rem" && "30vw"};
    width: ${({ hw }) => hw !== "22rem" && "30vw"};

    min-width: ${({ hw }) => hw === "22rem" && "unset"};
    max-width: ${({ hw }) => hw === "22rem" && "unset"};
    height: ${({ hw }) => hw === "22rem" && "230px"};
    width: ${({ hw }) => hw === "22rem" && "230px"};
    margin-bottom: ${({ hw }) => hw === "22rem" && "2rem"};

    /* min-width: ${({ hw }) => hw === "22rem" && "25vw"};
    max-width: ${({ hw }) => hw === "22rem" && "25vw"};
    height: ${({ hw }) => hw === "22rem" && "25vw"}; */
  }

  @media (max-width: 600px) {
    border-radius: 12px;
    height: ${({ hw }) => hw !== "22rem" && "38vw"};
    width: ${({ hw }) => hw !== "22rem" && "38vw"};
  }
`;

const Visits = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 10;
  opacity: 0;
  font-size: 2rem;
  transition: all 0.8s;
  font-weight: 500;
`;

const Img = styled.img<{ hw: any }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  transition: all 0.5s;
  overflow: hidden;
  transform: scale(1.025);

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`;
