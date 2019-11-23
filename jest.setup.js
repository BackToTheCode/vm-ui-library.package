const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, `./config/${process.env.NODE_ENV}.env`)});