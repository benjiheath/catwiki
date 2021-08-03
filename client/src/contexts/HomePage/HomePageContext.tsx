import axios from "axios";
import { createContext, useReducer, useContext, useRef, useEffect } from "react";
import { initState, homePageReducer } from "./reducer";

export const HomePageContext = createContext(null);

const HomePageProvider = (props: any) => {
  const [state, dispatch] = useReducer(homePageReducer, initState);

  const dispatchers = {
    setCats: (value: any) => {
      dispatch({ type: "SET_CATS", payload: value });
    },
    setLoading: (value: any) => {
      dispatch({ type: "SET_LOADING", payload: value });
    },
    setSearchLoading: (value: any) => {
      dispatch({ type: "SET_SEARCH_LOADING", payload: value });
    },
    setShowModal: (value: any) => {
      dispatch({ type: "SET_MODAL", payload: value });
    },
    setNoResults: (value: any) => {
      dispatch({ type: "SET_NO_RESULTS", payload: value });
    },
    setTopVisits: (value: any) => {
      dispatch({ type: "SET_TOP_VISITS", payload: value });
    },
    initSearch: () => {
      dispatch({ type: "INIT_SEARCH" });
    },
    inputIsEmpty: () => {
      dispatch({ type: "INPUT_EMPTY" });
    },
    noResultsHandler: () => {
      dispatch({ type: "NO_RESULTS" });
    },
    successfulSearch: (value: any) => {
      dispatch({ type: "SUCCESS", payload: value });
      console.log(value);
    },
  };

  const {
    setLoading,
    setSearchLoading,
    setCats,
    setShowModal,
    setNoResults,
    setTopVisits,
    initSearch,
    inputIsEmpty,
    noResultsHandler,
    successfulSearch,
  } = dispatchers;

  // State for throttling/debouncing
  const inputRef = useRef<any>(null);
  const timeout = useRef<any>();
  const throttling = useRef(false);

  // FETCH with debouncing
  const searchCatsOnInputChange = () => {
    initSearch();
    clearTimeout(timeout.current);

    if (!inputRef.current.value.trim()) {
      inputIsEmpty(); // if input empty, remove suggestions & avoid making request
      return null;
    }

    timeout.current = setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://catwiki-api-bjd.herokuapp.com/query/${inputRef.current.value.trim()}`
        );
        if (res.data.status === "no results") {
          noResultsHandler();
          return;
        }
        const data = res.data.data;
        successfulSearch(data);
      } catch (err) {
        console.log(err);
      }
    }, 500);
  };

  // GET breed visits on page load
  const getTopVisitsFromAPI = async () => {
    setLoading(true);

    try {
      const {
        data: { data },
      } = await axios.get(`https://catwiki-api-bjd.herokuapp.com/visits`);
      console.log("TOPS:", data);
      setTopVisits(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTopVisitsFromAPI();
  }, []);

  return (
    <HomePageContext.Provider
      value={{ ...state, ...dispatchers, searchCatsOnInputChange, getTopVisitsFromAPI, inputRef }}
    >
      {props.children}
    </HomePageContext.Provider>
  );
};

export const useHomePageContext: any = () => useContext(HomePageContext);

export default HomePageProvider; /* 































 //! THROTTLING

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
