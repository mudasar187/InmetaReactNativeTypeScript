import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://10.0.2.2:5000/', // for Android emulator

  baseURL: 'http://localhost:5000/', // for iOS emulator
});
