//dotenv
require('dotenv').config();

//mongoose
// require('./db/connect');
const connectDB = require('./db/connect');

const port = process.env.PORT || 5000;
const express = require('express');
const app = express();

const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');
//middleware
app.use(express.static('./public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`hello from the server created from express`);
});

app.use('/api/v1/tasks', tasks);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('connected to db');
    app.listen(port, () => {
      console.log(`server is running on port ${port} `);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
