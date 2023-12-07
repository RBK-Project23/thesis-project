const express = require('express');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 7000; // Use environment variable PORT or default to 7000

// Example route
app.get('/', (req, res) => {
  res.send('Hello from your Express server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
