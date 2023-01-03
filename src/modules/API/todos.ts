import axios from 'axios';

export const getTodos = axios({
  method: 'GET',
  url: 'http://localhost:todos',
  headers:{
    
  }
})