export const catProfileReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_CAT_DATA":
      return { ...state, data: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      throw new Error(`Error with action: ${action}`);
  }
};
