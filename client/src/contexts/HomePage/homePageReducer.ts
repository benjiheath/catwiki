import { NameAndId, ParsedCat } from '../../types';

interface InitState {
  cats: NameAndId[] | null;
  loading: boolean;
  searchLoading: boolean;
  showModal: boolean;
  noResults: boolean;
  topVisits: null | ParsedCat[];
}

export type ACTIONTYPE =
  | { type: 'SET_CAT_DATA'; payload: NameAndId[] }
  | {
      type: 'SET_LOADING' | 'SET_SEARCH_LOADING' | 'SET_MODAL' | 'SET_NO_RESULTS';
      payload: boolean;
    }
  | { type: 'SET_TOP_VISITS'; payload: ParsedCat[] }
  | {
      type: 'INIT_SEARCH' | 'INPUT_EMPTY' | 'NO_RESULTS';
      payload?: undefined;
    }
  | { type: 'SUCCESS'; payload: NameAndId[] };

export const initState: InitState = {
  // cats: [{ name: '', id: '' }],
  cats: null,
  loading: false,
  searchLoading: false,
  showModal: false,
  noResults: false,
  topVisits: null,
};

export const homePageReducer = (state: InitState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_CAT_DATA':
      return { ...state, cats: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_SEARCH_LOADING':
      return { ...state, searchLoading: action.payload };
    case 'SET_MODAL':
      return { ...state, showModal: action.payload };
    case 'SET_NO_RESULTS':
      return { ...state, noResults: action.payload };
    case 'SET_TOP_VISITS':
      return { ...state, topVisits: action.payload };
    case 'INIT_SEARCH':
      return {
        ...state,
        searchLoading: true,
        cats: initState.cats,
        showModal: false,
        noResults: false,
      };
    case 'INPUT_EMPTY':
      return { ...state, cats: initState.cats, searchLoading: false, showModal: false };
    case 'NO_RESULTS':
      return {
        ...state,
        cats: initState.cats,
        searchLoading: false,
        showModal: true,
        noResults: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        cats: action.payload,
        searchLoading: false,
        showModal: true,
        noResults: false,
      };
    default:
      throw new Error(`Error with action: ${action}`);
  }
};
