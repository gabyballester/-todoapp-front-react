import axios from 'axios';

// constantes
const host = 'http://localhost'
const port = '5000'
const baseUrl = `${host}:${port}/api/`;

export async function saveTodoApi(description) {
  try {
    const response = await axios
      .get(`${baseUrl}/todos`, { description });
    console.log(response);
    return response;
  } catch (err) {
    console.error(err.message);
  }
}