import db from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());          // Allows React app to talk to this backend
app.use(express.json());  // Allows backend to read JSON data sent in request bodies

//"test" route to make sure the server is alive
app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from the backend server!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});