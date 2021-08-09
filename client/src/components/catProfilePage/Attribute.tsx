import styled from 'styled-components';
import { LooseObject } from '../../types';

interface props {
  attr: LooseObject;
}

const Attribute = ({ attr }: props) => {
  const [attribute] = Object.keys(attr);
  const [value]: any = Object.values(attr);

  // Mapping 'bar' elements from this arr to determine bar color.
  const attributeBars = new Array(5).fill(null).map((_, i) => {
    if (i <= value) {
      const difference = 5 - i - 1;
      // switch (difference) {
      //   case 0:
      //     return "#544439";
      //   case 1:
      //     return "#725e51";
      //   case 2:
      //     return "#816a5b";
      //   case 3:
      //     return "#917868";
      //   case 4:
      //     return "#a38c7c";
      //   case 5:
      //     return "#c0a797";
      //   default:
      //     return "#E0E0E0";
      // }
      switch (difference) {
        case 0:
          return 'linear-gradient(to right, #5c4c44, #1f1b18)';
        case 1:
          return 'linear-gradient(to right, #867266, #5c4c44)';
        case 2:
          return 'linear-gradient(to right, #ac9282, #867266)';
        case 3:
          return 'linear-gradient(to right, #d3b6a4, #ac9282)';
        case 4:
          return 'linear-gradient(to right, #ffe6d6, #d3b6a4)';
        case 5:
          return '#c0a797';
        default:
          return '#E0E0E0';
      }
    } else return null;
  });

  return (
    <Container>
      <Key>{attribute}:</Key>
      <Value>
        {attributeBars.map((bar, i) => (
          <Bar isBrown={bar} key={i} />
        ))}
      </Value>
    </Container>
  );
};

export default Attribute; /* 





*/ // Styles

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  font-size: 1.6rem;
  color: black;
  margin-bottom: 2rem;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 750px) {
    width: 83%;
  }

  @media (max-width: 460px) {
    width: 100%;
  }
`;

export const Key = styled.span`
  font-weight: 700;
  text-transform: capitalize;
`;

const Value = styled.div`
  display: flex;
`;

const Bar = styled.div<{ isBrown: any }>`
  width: 6rem;
  height: 1.1rem;
  border-radius: 8px;
  margin-left: 1rem;
  /* background-color: ${({ isBrown }) => (isBrown ? isBrown : '#E0E0E0')}; */
  background: ${({ isBrown }) => (isBrown ? isBrown : '#E0E0E0')};
`;
