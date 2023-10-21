import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:5000';

const token = localStorage?.token || 'abc';

export const socket = io(URL, {
  auth: {
    token
  }
});