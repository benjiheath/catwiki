import { Header, TopVisitedBreeds, Info, Footer } from '../components/homePage';
import { HomeContainer } from '../components/styledComponents';
import { useHomePageContext } from '../contexts/HomePage/HomePageContext';
import { Spinner } from '../components/reusable';

const HomePage = () => {
  const { loading } = useHomePageContext();

  return (
    <HomeContainer>
      {loading && <Spinner type='general' />}
      {!loading && (
        <>
          <Header />
          <TopVisitedBreeds />
          <Info />
          <Footer />
        </>
      )}
    </HomeContainer>
  );
};

export default HomePage;
