const mongoose = require('mongoose');

// const connectionString =
// const password = 'r8HWutGozXQACd3s';

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });
};
// .then(() => {
//   console.log('connected to DB...');
// })
// .catch((err) => console.log(err));

module.exports = connectDB;
