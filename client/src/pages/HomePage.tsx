import { Header, Breeds, Info, Footer } from "../components/homePage";
import { HomeContainer } from "../components/styledComponents";
import { useHomePageContext } from "../contexts/HomePage/HomePageContext";

const HomePage = () => {
  const { loading } = useHomePageContext();

  return (
    <HomeContainer>
      <Header />
      <Breeds />
      <Info />
      <Footer />
    </HomeContainer>
  );
};

export default HomePage;
