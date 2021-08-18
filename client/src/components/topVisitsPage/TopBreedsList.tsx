import TopBreed from './TopBreed';
import { useHomePageContext } from '../../contexts/HomePage/HomePageContext';
import { ParsedCat } from '../../types';

const TopBreedsList = () => {
  const { topVisits } = useHomePageContext();

  return (
    <>
      {topVisits.map((breed: ParsedCat, idx: number) => (
        <TopBreed breed={breed} idx={idx} />
      ))}
    </>
  );
};

export default TopBreedsList;
