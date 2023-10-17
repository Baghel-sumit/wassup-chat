const { createServer } = require('http');
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');

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
    console.log({ message });
  });

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
});

httpServer.listen(3000, ()=> {
  console.log('Server is running on port : 3000');
})

