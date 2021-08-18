import axios from 'axios';
import { MutableRefObject } from 'react';
import { LooseObject, Timeout } from '../../../types';

// using debouncing
export const searchCatsOnInputChange = (
  { initSearch, inputIsEmpty, noResultsHandler, successfulSearch }: LooseObject,
  timeout: Timeout,
  inputRef: MutableRefObject<HTMLInputElement>
) => {
  initSearch();
  clearTimeout(timeout.current as NodeJS.Timeout);

  if (!inputRef.current.value.trim()) {
    inputIsEmpty(); // if input empty, remove suggestions & avoid making request
    return null;
  }

  const url =
    process.env.REACT_APP_ENV === 'dev'
      ? 'http://localhost:3001'
      : 'https://catwiki-api-bjd.herokuapp.com';

  timeout.current = setTimeout(async () => {
    try {
      const res = await axios.get(`${url}/query/${inputRef.current.value.trim()}`);
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
