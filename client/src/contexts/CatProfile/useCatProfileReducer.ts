import { useReducer } from 'react';
import { initState, catProfileReducer } from './reducer';
import { LooseObject } from '../../types';

const useCatProfileReducer = () => {
  const [state, dispatch] = useReducer(catProfileReducer, initState);

  const dispatchers = {
    setData: (value: any) => {
      dispatch({
        type: 'SET_CAT_DATA',
        payload: value,
      });
    },
    setLoading: (value: any) => {
      dispatch({ type: 'SET_LOADING', payload: value });
    },
  };

  return [state, dispatchers as LooseObject];
};

export default useCatProfileReducer;
