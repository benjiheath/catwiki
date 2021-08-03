export const initState = {
  cats: [{ name: "", id: "" }],
  loading: false,
  searchLoading: false,
  showModal: false,
  noResults: false,
  topVisits: null,
};

export const homePageReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_CAT_DATA":
      return { ...state, cats: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_SEARCH_LOADING":
      return { ...state, searchLoading: action.payload };
    case "SET_MODAL":
      return { ...state, showModal: action.payload };
    case "SET_NO_RESULTS":
      return { ...state, noResults: action.payload };
    case "SET_TOP_VISITS":
      return { ...state, topVisits: action.payload };
    case "INIT_SEARCH":
      return {
        ...state,
        searchLoading: true,
        cats: initState.cats,
        showModal: false,
        noResults: false,
      };
    case "INPUT_EMPTY":
      return { ...state, cats: initState.cats, searchLoading: false, showModal: false };
    case "NO_RESULTS":
      return {
        ...state,
        cats: initState.cats,
        searchLoading: false,
        showModal: true,
        noResults: true,
      };
    case "SUCCESS":
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
