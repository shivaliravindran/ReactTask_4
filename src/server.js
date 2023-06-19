const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
