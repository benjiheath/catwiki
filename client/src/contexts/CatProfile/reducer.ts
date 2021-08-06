interface InitState {
  data: object[] | null;
  loading: boolean;
}

type ACTIONTYPE =
  | { type: 'SET_CAT_DATA'; payload: InitState['data'] }
  | { type: 'SET_LOADING'; payload: boolean };

export const initState: InitState = {
  data: null,
  loading: false,
};

export const catProfileReducer = (state: InitState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_CAT_DATA':
      return { ...state, data: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      throw new Error(`Error with action: ${action}`);
  }
};
