'use client'
import axios from 'axios';
import Cookie from "js-cookie";

const token = Cookie.get('token');
// const api_with_token = axios.create({
//   baseURL: 'https://usis2backend.cyclic.app',
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// });

// const api_without_token = axios.create({
//   baseURL: 'https://usis2backend.cyclic.app',
//   }
// );

const api_with_token = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
});

const api_without_token = axios.create({
  baseURL: 'http://localhost:5000'
  }
);

export { api_with_token, api_without_token }