const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

const usedNames = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  let username = '';

  socket.on('send name', (name) => {
    if (usedNames.includes(name)) {
      socket.emit('name error', 'Це ім\'я вже використовується. Будь ласка, виберіть інше ім\'я.');
    } else {
      usedNames.push(name);
      username = name;
    }
  });

  socket.on('send message', (chat) => {
    if (username) {
      io.emit('send name', username);
      io.emit('send message', chat);
    } else {
      socket.emit('name error', 'Будь ласка, виберіть ім\'я перед надсиланням повідомлення.');
    }
  });

  socket.on('disconnect', () => {
    if (username) {
      const index = usedNames.indexOf(username);
      if (index !== -1) {
        usedNames.splice(index, 1);
      }
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening at the port: ${port}`);
});


