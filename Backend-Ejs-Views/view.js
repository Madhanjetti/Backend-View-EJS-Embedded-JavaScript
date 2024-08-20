console.log(__dirname);
const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Route to render a page with EJS
app.get('/', (req, res) => {
  const user = {
    name: 'John Doe',
    age: 25,
    hobbies: ['Reading', 'Cycling', 'Coding']
  };
  res.render('index', { user });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
