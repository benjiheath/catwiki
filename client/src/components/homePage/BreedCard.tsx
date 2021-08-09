import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CatImgHoverVisits } from '../reusable';
import { ParsedCat } from '../../types';

interface Props {
  breed: ParsedCat;
}

const BreedCard = ({ breed }: Props) => {
  return (
    <Wrapper>
      <Link to={`/breeds/${breed.id}`}>
        <CatImgHoverVisits visits={breed.visits} hw='21.5rem' img={breed.img} />
      </Link>
      <BreedName>{breed.name}</BreedName>
    </Wrapper>
  );
};

export default BreedCard; /*






Styling */

const Wrapper = styled.div`
  @media (max-width: 900px) {
    text-align: center;
  }

  @media (max-width: 600px) {
    &:nth-of-type(1) {
      justify-self: start;
    }
    &:nth-of-type(2) {
      justify-self: end;
    }
    &:nth-of-type(3) {
      justify-self: start;
    }
    &:nth-of-type(4) {
      justify-self: end;
    }
  }
`;

const BreedName = styled.h4`
  font-size: 1.8rem;
  margin-top: 1rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
