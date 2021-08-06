import { createContext, useCallback, useContext } from 'react';
import useCatProfileReducer from './useCatProfileReducer';
import { getBreedData } from './handlers/getBreedData';
import { ProviderProps } from '../../types';

export const CatProfileContext = createContext<Object | null>(null);

const CatProfileProvider = (props: ProviderProps) => {
  const [state, dispatchers] = useCatProfileReducer();

  // Pass to Content component to get breed info on page load
  const getBreedDataHandler = useCallback(
    (id: number) => {
      getBreedData(id, dispatchers);
    },
    [dispatchers]
  );

  return (
    <CatProfileContext.Provider value={{ ...state, getBreedDataHandler }}>
      {props.children}
    </CatProfileContext.Provider>
  );
};

export const useCatProfileContext: any = () => useContext(CatProfileContext);

export default CatProfileProvider;
