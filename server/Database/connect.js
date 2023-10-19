const mongoose = require('mongoose');

const URL = process.env.DATABASE_URL.replace('<password>', process.env.DB_PASSWORD);

mongoose.connect(URL).then(()=> {
  console.log('DB connected successfully!');
}).catch((error)=> {
  console.log('Error in db connection', error);
})