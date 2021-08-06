import axios from 'axios';
import { LooseObject } from '../../../types';

export const getBreedData = async (id: number, { setData, setLoading }: LooseObject) => {
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
