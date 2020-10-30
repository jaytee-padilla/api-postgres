const server = require('./server');
require('dotenv').config();

server.listen(process.env.PORT, () => 
  console.log('\nListening on port 3000\n')
);