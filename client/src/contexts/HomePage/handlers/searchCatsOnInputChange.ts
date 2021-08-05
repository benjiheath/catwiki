import axios from 'axios';
import { LooseObject, Timeout } from '../../../types';

// using debouncing
export const searchCatsOnInputChange = (
  { initSearch, inputIsEmpty, noResultsHandler, successfulSearch }: LooseObject,
  timeout: Timeout,
  inputRef: any
) => {
  initSearch();
  clearTimeout(timeout.current as NodeJS.Timeout);

  if (!inputRef.current.value.trim()) {
    inputIsEmpty(); // if input empty, remove suggestions & avoid making request
    return null;
  }

  timeout.current = setTimeout(async () => {
    try {
      const res = await axios.get(
        `https://catwiki-api-bjd.herokuapp.com/query/${inputRef.current.value.trim()}`
      );
      if (res.data.status === 'no results') {
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
