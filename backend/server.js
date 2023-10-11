const express = require("express");
const app = express();
const createRoute = require("./routes/createRoute");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
//middleware
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Add the allowed HTTP methods
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Add the allowed headers
    res.header('Access-Control-Allow-Credentials', true); // Enable if you're using cookies/sessions
    next();
  });

const cors_options = {
    origin:'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(cors_options));
//mount
app.use('/api/v1',createRoute);
 

// db connection
console.log("db connecting...")
const {dbConnect} = require("./config/database")
dbConnect();
console.log("db connnected");

//server activate
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})

