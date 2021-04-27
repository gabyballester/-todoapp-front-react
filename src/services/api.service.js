import axios from 'axios';

// constantes
const host = 'http://localhost'
const port = '5000'
const baseUrl = `${host}:${port}/api/`;

export async function saveTodoApi(description) {
  try {
    const response = await axios
      .post(`${baseUrl}/todos`, { description });
    console.log(response);
    return response;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getTodosApi() {
  try {
    const response = await axios
      .get(`${baseUrl}/todos`);
    return response;
  } catch (err) {
    console.error(err.message);
  }
}