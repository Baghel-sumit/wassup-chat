const { createServer } = require('http');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { Server } = require('socket.io');
require('dotenv').config();
const userRoutes = require('./Routers/userRoutes');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

// main routes
app.use('/api/v1/user', userRoutes);

// io.on('connection', (socket) => {
//   console.log(`Socket ${socket.id} connected`);

//   socket.on('sendMessage', (message) => {
//     io.emit('foo', message);
//   });

//   socket.on('disconnect', () => {
//     console.log(`Socket ${socket.id} disconnected`);
//   });
// });

module.exports = httpServer;
