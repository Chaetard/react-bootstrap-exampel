import axios from 'axios';

const BASE_URL = 'https://api.chucknorris.io/jokes';

const getRandomJoke = async () => {
  const response = await axios.get(`${BASE_URL}/random`);
  return response.data.value;
};

export default getRandomJoke;
