import TopBreed from "./TopBreed";
import { useHomePageContext } from "../../contexts/HomePage/HomePageContext";

const TopBreedsList = () => {
  const { topVisits } = useHomePageContext();

  return (
    <>
      {topVisits.map((breed: any, idx: number) => (
        <TopBreed breed={breed} idx={idx} />
      ))}
    </>
  );
};

export default TopBreedsList;
