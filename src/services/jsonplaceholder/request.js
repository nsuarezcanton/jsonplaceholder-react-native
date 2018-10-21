import axios from 'axios';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

export default async function request({ endpoint, verb = 'GET', data, headers }) {
  const options = {
    method: verb,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (data) {
    options.data = data;
  }

  try {
    const res = await axios(`${BASE_API_URL}/${endpoint}/`, options);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
