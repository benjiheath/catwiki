import axios from "axios";
import { createContext, useReducer, useContext } from "react";
import { catProfileReducer } from "./reducer";

export const CatProfileContext = createContext(null);

const initState = {
  data: null,
  loading: false,
};

const CatProfileProvider = (props: any) => {
  const [state, dispatch] = useReducer(catProfileReducer, initState);

  const dispatchers = {
    setData: (value: any) => {
      dispatch({
        type: "SET_CAT_DATA",
        payload: value,
      });
    },
    setLoading: (value: any) => {
      dispatch({ type: "SET_LOADING", payload: value });
    },
  };

  // Fetch
  const { setLoading, setData } = dispatchers;

  const getBreedData = async (id: number) => {
    try {
      setLoading(true);

      const { data } = await axios.get(`https://catwiki-api-bjd.herokuapp.com/select/${id}`);

      console.log(data);

      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CatProfileContext.Provider value={{ ...state, ...dispatchers, getBreedData }}>
      {props.children}
    </CatProfileContext.Provider>
  );
};

export const useCatProfileContext: any = () => useContext(CatProfileContext);

export default CatProfileProvider;
