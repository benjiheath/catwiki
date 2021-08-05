import axios from 'axios';
import { LooseObject } from '../../../types';

export const getTopVisitsFromAPI = async ({ setLoading, setTopVisits }: LooseObject) => {
  setLoading(true);

  try {
    const {
      data: { data },
    } = await axios.get(`https://catwiki-api-bjd.herokuapp.com/visits`);
    setTopVisits(data);
    setLoading(false);
  } catch (err) {
    console.log(err);
  }
};
