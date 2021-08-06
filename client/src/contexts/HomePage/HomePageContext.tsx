import { createContext, useContext, useRef, useEffect, useCallback } from 'react';
import useHomePageReducer from './useHomePageReducer';
import { Timeout } from '../../types';
import { searchCatsOnInputChange, getTopVisitsFromAPI } from './handlers';
import { ProviderProps } from '../../types';

export const HomePageContext = createContext<Object | null>(null);

const HomePageProvider = (props: ProviderProps) => {
  const [state, dispatchers] = useHomePageReducer();

  // State for debouncing; used in search handler
  const inputRef = useRef<HTMLInputElement>(null!);
  const timeout: Timeout = useRef(null!);

  // passing this handler down to Search component
  const handleSearch = useCallback(() => {
    searchCatsOnInputChange(dispatchers, timeout, inputRef);
  }, [dispatchers]);

  // get breed visits on page load
  useEffect(() => {
    getTopVisitsFromAPI(dispatchers);
  }, []);

  return (
    <HomePageContext.Provider
      value={{
        ...state,
        ...dispatchers,
        searchCatsOnInputChange,
        getTopVisitsFromAPI,
        inputRef,
        handleSearch,
      }}
    >
      {props.children}
    </HomePageContext.Provider>
  );
};

export const useHomePageContext: any = () => useContext(HomePageContext);

export default HomePageProvider; /* 































 //! THROTTLING

  // const throttling = useRef(false);


  // const onChangeHandler = () => {
  //   if (throttling.current) return;

  //   // if input empty, remove suggestions & avoid making request
  //   if (inputRef.current.value.length === 0) {
  //     setCats([{ name: 'kok' }]);
  //     return;
  //   }

  //   throttling.current = true;
  //   setTimeout(async () => {
  //     throttling.current = false;
  //     const {
  //       data: { data },
  //     } = await axios.get(
  //       `http://127.0.0.1:5000/query/${inputRef.current.value}`
  //     );
  //     setCats(data);
  //   }, 600);
  // };

  // interface resultProps {
  //   cat: CatObj;
  // }

*/
