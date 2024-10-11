const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/database');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const quizRoutes = require('./routes/quizRoutes');
const PORT=process.env.PORT;
const cors = require('cors');
// connecting database
db();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

const corsOptions = {
  origin: process.env.FRONTEND_URL, 
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// routes
app.use('/api',userRoutes);
app.use('/api/', quizRoutes);


app.get('/',(req,res)=>{
    res.send("Welcome to my website");
})


app.listen(PORT,()=>{
    console.log(`Server is working on port:${PORT}`);
});





