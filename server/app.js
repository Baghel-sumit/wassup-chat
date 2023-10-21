const { createServer } = require('http');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { Server } = require('socket.io');
require('dotenv').config();
const userRoutes = require('./Routers/userRoutes');
const { tokenDecoder } = require('./Middilewares/jwt-auth');
const { getUserChats, saveText } = require('./Controllers/userChats');

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
app.use(morgan('dev'));
io.use((socket, next) => {
  try {
    const decode = tokenDecoder(socket.handshake.auth.token);
    if (decode.userEmail) 
      return next();
  } catch {
    socket.emit('error', { message: 'Invalid User' });
    return next(new Error('Invalid user'));
  }
  return next(new Error('Invalid user'));
});

// main routes
app.use('/api/v1/user', userRoutes);

io.on('connection', (socket) => {
  console.log(`Socket ${socket.id} connected`);

  socket.on("join", ({ senderEmail, hostEmail })=> {
    getUserChats(senderEmail, hostEmail).then((res)=> {
      socket.emit('sendMessages', res);
    }).catch((err)=> {
      socket.emit('error', err.message);
    })
  });

  socket.on('sendText', ({ composers, text, composerEmail }) => {
    saveText({ composers, text, composerEmail }).then((res)=> {
      socket.emit('sendMessages', res);
    }).catch((err)=> {
      socket.emit('error', err.message);
    })
  });

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected`);
    socket.disconnect();
  });

  socket.on("error", (err) => {
    if (err && err.message === "Invalid user") {
      socket.disconnect();
    }
  });
});

module.exports = httpServer;
