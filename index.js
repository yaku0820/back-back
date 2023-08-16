//import routes importloj oruulah m=zam zaah heseg uugnaa ehleed eniig zahgu shuu za okay
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require('./db')
const authRoutes = require('./routes/auth')

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

//routess
app.use('/api/auth',authRoutes)



const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
