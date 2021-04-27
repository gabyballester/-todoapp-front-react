import axios from 'axios';

// constantes
const host = 'http://localhost'
const port = '5000'
const baseUrl = `${host}:${port}/api/`;

export async function saveTodoApi(description) {
  try {
    return await axios
      .post(`${baseUrl}/todos`, { description });
  } catch (err) {
    return err.message
  }
}

export async function getTodosApi() {
  try {
    return await axios
      .get(`${baseUrl}/todos`);
  } catch (err) {
    return err.message
  }
}

export async function deleteTodoApi(id) {
  try {
    return await axios
      .delete(`${baseUrl}/todos/${id}`);
  } catch (err) {
    return err.message
  }
}