import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import products from './data.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT ||5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json())
app.use('/public', express.static('public'));
// Route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Product Catalog API'); 
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
