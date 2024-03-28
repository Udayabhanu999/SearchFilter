// server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://umaddineni:Udaya@987@cluster0.sbbhlws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define schema and model
const Schema = mongoose.Schema;
const myModelSchema = new Schema({
  name: String,
  email: String,
  address: String
});
const MyModel = mongoose.model('MyModel', myModelSchema);

// API endpoint to fetch data
app.get('/api/data', async (req, res) => {
  try {
    const data = await MyModel.find({});
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
