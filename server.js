const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
require('dotenv').config();
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on("error",()=>{
  console.error('Error connecting to MongoDB:', err);
})
db.once("open",()=>{
  console.log('Connected to MongoDB');
})
// Define a schema and model for content storage
const contentSchema = new mongoose.Schema({
  room: String,
  content: String
});

const Content = mongoose.model('Content', contentSchema);

app.use(express.static(__dirname + '/'));

// Load initial content for each room from the database
async function getInitialContent(room) {
  const data = await Content.findOne({ room });
  return data ? data.content : null;
}

io.on('connection', async (socket) => {
  console.log('A user connected');

  // Load initial content and emit to the new connection for each room
  socket.emit('updateContent', await getInitialContent('CR-13'));
  socket.emit('updateContent12', await getInitialContent('CR-12'));
  socket.emit('updateContent11', await getInitialContent('CR-11'));
  socket.emit('updateContent101', await getInitialContent('Lab-101'));
  socket.emit('updateContent102', await getInitialContent('Lab-102'));

  // Listen for content updates and store them in the database
  socket.on('editContent', async (content) => {
    await Content.findOneAndUpdate(
      { room: 'CR-13' },
      { room: 'CR-13', content },
      { upsert: true, new: true }
    );
    io.emit('updateContent', content);
  });

  socket.on('editContent12', async (content) => {
    await Content.findOneAndUpdate(
      { room: 'CR-12' },
      { room: 'CR-12', content },
      { upsert: true, new: true }
    );
    io.emit('updateContent12', content);
  });

  socket.on('editContent11', async (content) => {
    await Content.findOneAndUpdate(
      { room: 'CR-11' },
      { room: 'CR-11', content },
      { upsert: true, new: true }
    );
    io.emit('updateContent11', content);
  });

  socket.on('editContent101', async (content) => {
    await Content.findOneAndUpdate(
      { room: 'Lab-101' },
      { room: 'Lab-101', content },
      { upsert: true, new: true }
    );
    io.emit('updateContent101', content);
  });

  socket.on('editContent102', async (content) => {
    await Content.findOneAndUpdate(
      { room: 'Lab-102' },
      { room: 'Lab-102', content },
      { upsert: true, new: true }
    );
    io.emit('updateContent102', content);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
