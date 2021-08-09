import { useReducer } from 'react';
import { initState, catProfileReducer } from './reducer';
import { LooseObject, ParsedCat } from '../../types';

const useCatProfileReducer = () => {
  const [state, dispatch] = useReducer(catProfileReducer, initState);

  const dispatchers = {
    setData: (value: ParsedCat) => {
      dispatch({
        type: 'SET_CAT_DATA',
        payload: value,
      });
    },
    setLoading: (value: boolean) => {
      dispatch({ type: 'SET_LOADING', payload: value });
    },
  };

  return [state, dispatchers as LooseObject];
};

export default useCatProfileReducer;
