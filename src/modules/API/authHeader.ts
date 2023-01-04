import axios from 'axios';

export const authHeader= (token: string | null) => {
  if (token != null) {
    axios.defaults.headers.common['Authorization'] = `${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}