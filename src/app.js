const express = require('express');
const path = require('path');
const hbs = require('hbs');


const app = express();

app.get('/', (req, res) => {
  res.send('Welcome...')
});



const port = process.env.PORT || 5000;

app.listen(port, ()=>{ console.log(`Server running on port ${port}...`);
})