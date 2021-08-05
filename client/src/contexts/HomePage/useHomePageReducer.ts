import { useReducer } from 'react';
import { initState, homePageReducer } from './homePageReducer';
import { LooseObject } from '../../types';

const useHomePageReducer = () => {
  const [state, dispatch] = useReducer(homePageReducer, initState);

  const dispatchers = {
    setCats: (value: any) => {
      dispatch({ type: 'SET_CAT_DATA', payload: value });
    },
    setLoading: (value: boolean) => {
      dispatch({ type: 'SET_LOADING', payload: value });
    },
    setSearchLoading: (value: boolean) => {
      dispatch({ type: 'SET_SEARCH_LOADING', payload: value });
    },
    setShowModal: (value: boolean) => {
      dispatch({ type: 'SET_MODAL', payload: value });
    },
    setNoResults: (value: boolean) => {
      dispatch({ type: 'SET_NO_RESULTS', payload: value });
    },
    setTopVisits: (value: any) => {
      dispatch({ type: 'SET_TOP_VISITS', payload: value });
    },
    initSearch: () => {
      dispatch({ type: 'INIT_SEARCH' });
    },
    inputIsEmpty: () => {
      dispatch({ type: 'INPUT_EMPTY' });
    },
    noResultsHandler: () => {
      dispatch({ type: 'NO_RESULTS' });
    },
    successfulSearch: (value: boolean) => {
      dispatch({ type: 'SUCCESS', payload: value });
    },
  };

  return [state, dispatchers as LooseObject];
};

export default useHomePageReducer;
