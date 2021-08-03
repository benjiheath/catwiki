import { Content, OtherPhotos } from "../components/catProfilePage";
import { Footer } from "../components/homePage";
import { useCatProfileContext } from "../contexts/CatProfile/CatProfileContext";
import { Spinner } from "../components/reusable";

const CatProfilePage = () => {
  const { loading } = useCatProfileContext();

  return (
    <>
      {loading && <Spinner type="general" />}
      <Content />
      <OtherPhotos />
      {!loading && <Footer />}
    </>
  );
};

export default CatProfilePage;
