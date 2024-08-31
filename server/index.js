const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./config/mongoose'); // Ensure this import is correct

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Serve the static files from the Vite build directory
app.use(express.static(path.join(__dirname, '../client/admission/dist')));

// Parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import and use routes
const routes = require('./routes/index');
app.use('/', routes);

// Handle React routing, return all requests to the index.html of Vite build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/admission/dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
