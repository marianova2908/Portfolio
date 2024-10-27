const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://mariapaula6765:xOa01sdD37bViyzA@cluster0.fe9jz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to your Portfolio Application!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});