const server = require('./app');
require('./Database/connect');

const port = process.env.LOCAL_PORT || 5000;

server.listen(port, ()=> {
  console.log(`Server is running on port : ${port}`);
})