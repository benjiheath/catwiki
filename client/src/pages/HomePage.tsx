import { Header, TopVisitedBreeds, Info, Footer } from '../components/homePage';
import { HomeContainer } from '../components/styledComponents';

const HomePage = () => {
  return (
    <HomeContainer>
      <Header />
      <TopVisitedBreeds />
      <Info />
      <Footer />
    </HomeContainer>
  );
};

export default HomePage;
