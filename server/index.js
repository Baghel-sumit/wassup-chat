const { createServer } = require('http');
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
require('dotenv').config();

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

io.on('connection', (socket) => {
  console.log(`Socket ${socket.id} connected`);

  socket.on('sendMessage', (message) => {
    io.emit('foo', message);
  });

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
});

const port = process.env.LOCAL_PORT || 5000;

httpServer.listen(port, ()=> {
  console.log(`Server is running on port : ${port}`);
})

