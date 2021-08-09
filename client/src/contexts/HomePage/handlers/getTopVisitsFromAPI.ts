import axios from 'axios';
import { LooseObject } from '../../../types';

export const getTopVisitsFromAPI = async ({ setLoading, setTopVisits }: LooseObject) => {
  setLoading(true);

  const url =
    process.env.REACT_APP_ENV === 'dev'
      ? 'http://localhost:3001'
      : 'https://catwiki-api-bjd.herokuapp.com';

  try {
    const {
      data: { data },
    } = await axios.get(`${url}/visits`);
    setTopVisits(data);
    setLoading(false);
  } catch (err) {
    console.log(err);
  }
};
