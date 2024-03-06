const express = require('express');
const cors = require('cors');
const dotenv=require('dotenv')
const app = express();
const port = 3001;
const taskRoutes = require('./Routers/TaskRoutes');

app.use(express.json());
app.use(cors());

app.use('/', taskRoutes);

app.listen(port, () => {
  console.log('server started');
});
