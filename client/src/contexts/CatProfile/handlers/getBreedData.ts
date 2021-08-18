import axios from 'axios';
import { LooseObject } from '../../../types';

export const getBreedData = async (id: string, { setData, setLoading }: LooseObject) => {
  try {
    setLoading(true);

    const url =
      process.env.REACT_APP_ENV === 'dev'
        ? 'http://localhost:3001'
        : 'https://catwiki-api-bjd.herokuapp.com';

    const { data } = await axios.get(`${url}/select/${id}`);

    setData(data);
    setLoading(false);
  } catch (err) {
    console.log(err);
  }
};
