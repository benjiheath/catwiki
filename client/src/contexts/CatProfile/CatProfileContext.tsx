import { createContext, useCallback, useContext } from 'react';
import useCatProfileReducer from './useCatProfileReducer';
import { getBreedData } from './handlers/getBreedData';
import { ProviderProps, CatProfContext, useCatProfContext } from '../../types';

export const CatProfileContext = createContext<CatProfContext | null>(null);

const CatProfileProvider = (props: ProviderProps) => {
  const [state, dispatchers] = useCatProfileReducer();

  // Passing to Content component to get breed info on page load
  const getBreedDataHandler = useCallback(
    (id: string) => {
      getBreedData(id, dispatchers);
    },
    [dispatchers]
  );

  return (
    <CatProfileContext.Provider value={{ ...state, getBreedDataHandler } as CatProfContext}>
      {props.children}
    </CatProfileContext.Provider>
  );
};

export const useCatProfileContext: useCatProfContext = () =>
  useContext(CatProfileContext) as CatProfContext;

export default CatProfileProvider;
