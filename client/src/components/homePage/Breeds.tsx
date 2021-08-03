import styled from "styled-components";
import { SectionContainer } from "../styledComponents";
import { Button, CatImgHoverVisits } from "../reusable";
import { useHomePageContext } from "../../contexts/HomePage/HomePageContext";
import { Link } from "react-router-dom";

const Breeds = () => {
  const { topVisits, loading } = useHomePageContext();
  console.log(topVisits);

  return (
    <Container>
      <MostSearched>Most Searched Breeds</MostSearched>
      <HeadingContainer>
        <Heading>66+ Breeds for you to discover</Heading>
        <Link to="/top">
          <Button text="See more" m="0 0 1.5rem" />
        </Link>
      </HeadingContainer>
      {!loading && topVisits && (
        <ImgContainer>
          {topVisits.slice(0, 4).map((breed: any) => {
            console.log(topVisits);
            return (
              <Wrapper>
                <Link to={`/breeds/${breed.id}`}>
                  <CatImgHoverVisits visits={breed.visits} hw="21.5rem" img={breed.img} />
                </Link>
                <BreedName>{breed.name}</BreedName>
              </Wrapper>
            );
          })}
        </ImgContainer>
      )}
    </Container>
  );
};

export default Breeds; /*





*/ // Styling

const Container = styled(SectionContainer)`
  height: var(--header-half);
  background-color: #e3e1dc;
  padding-top: 3.5rem;

  border-bottom-right-radius: 5rem;
  border-bottom-left-radius: 5rem;

  color: var(--text-brown);

  @media (max-width: 750px) {
    height: unset;
    padding-bottom: 3.5rem;
  }
`;

const MostSearched = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2.5rem;

  &::after {
    content: "";
    display: block;
    background-color: var(--line-brown);
    border-radius: 200px;
    height: 3.5px;
    width: 6rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`;

const Heading = styled.h2`
  font-size: 4.8rem;
  font-weight: bold;
  width: 53rem;
  line-height: 5.6rem;

  @media (max-width: 900px) {
    font-size: 4rem;
  }

  @media (max-width: 750px) {
    width: 35rem;
  }

  @media (max-width: 900px) {
    font-size: 3rem;
    line-height: unset;
    width: 35rem;
  }
`;

const ImgContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 5vw;

    justify-items: center;
  }

  @media (max-width: 600px) {
    grid-row-gap: 3vw;
  }
`;

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
