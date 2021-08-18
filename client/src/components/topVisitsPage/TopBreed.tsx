import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CatImgHoverVisits from '../reusable/CatImgHoverVisits';
import { ParsedCat } from '../../types';

interface Props {
  breed: ParsedCat;
  idx: number;
}

const TopBreed = ({ breed, idx }: Props) => {
  return (
    <Link to={`/breeds/${breed.id}`}>
      <BreedWrapper>
        <CatImgHoverVisits visits={breed.visits} hw='22rem' img={breed.img} />
        <TextWrapper>
          <BreedName>
            {idx + 1}.&nbsp;{breed.name}
          </BreedName>
          <NumVisits>
            <strong>{breed.visits}</strong> {breed.visits && breed.visits > 1 ? 'visits' : 'visit'}
          </NumVisits>
          <Description>{breed.description}</Description>
        </TextWrapper>
      </BreedWrapper>
    </Link>
  );
};

export default TopBreed; /*




*/ // Styling

const BreedWrapper = styled.div`
  display: flex;
  padding: 2rem 1rem;
  transition: all 0.5s;
  border-radius: 2rem;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 5rem;
  }

  &:hover {
    cursor: pointer;
    background-color: #36240713;

    & img {
      transform: scale(1);
      filter: blur(2px) brightness(0.9);
    }

    & span {
      opacity: 1;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BreedName = styled.h2`
  font-size: 3.6rem;
  text-align: center;

  @media (max-width: 750px) {
    margin-right: 4rem;
  }
`;

const NumVisits = styled.p`
  font-weight: 500;
  font-size: 12px;
  display: none;
  margin-right: 3rem;
  margin-bottom: 3rem;
  text-decoration: underline;
  color: #5a361da7;

  @media (max-width: 750px) {
    display: inline-block;
  }
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 1.8rem;

  @media (max-width: 750px) {
    font-size: 18px;
    text-align: justify;
  }
`;
