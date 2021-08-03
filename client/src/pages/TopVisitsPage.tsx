import styled from "styled-components";
import { Footer } from "../components/homePage";
import { useHomePageContext } from "../contexts/HomePage/HomePageContext";
import { Spinner } from "../components/reusable";
import TopBreedsList from "../components/topVisitsPage/TopBreedsList";

const TopVisitsPage = () => {
  const { topVisits } = useHomePageContext();

  return (
    <>
      {topVisits ? (
        <>
          <Container>
            <Heading>Top 10 most searched breeds</Heading>
            <TopBreedsList />
          </Container>
          <Footer />
        </>
      ) : (
        <Spinner type="general" />
      )}
    </>
  );
};

export default TopVisitsPage; /*




*/ // Styling

const Container = styled.div`
  width: 100%;
  color: var(--text-brown);
  font-weight: 700;
  padding-top: 3rem;
  margin-bottom: 5rem;
`;

const Heading = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 5rem;
`;
