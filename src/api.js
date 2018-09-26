import axios from 'axios';
const API_URL = 'http://localhost:3030/api'

export const saveTask = (task) =>
  axios.post(`${API_URL}/tasks`, task)
    .then(({ data }) => data);
  
export const loadTasks = () =>
  axios.get(`${API_URL}/tasks`)
    .then(({ data }) => data);
  
export const destroyTask = (id) =>
  axios.delete(`${API_URL}/tasks/${id}`)
    .then(({ data }) => data);
  
export const updateTask = (task) =>
  axios.put(`${API_URL}/tasks/${task.id}`, task)
    .then(({ data }) => data);
