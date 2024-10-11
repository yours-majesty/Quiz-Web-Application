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


const allowedOrigins = ["https://quiz-web-application-xyz.vercel.app"]; 
app.use(
    cors({
        origin: function (origin, callback) {
            if (
                !origin || 
                allowedOrigins.includes(origin)  
            ) {
                callback(null, true); 
            } else {
                callback(new Error("Not allowed by CORS")); 
            }
        },
        credentials: true, 
        optionsSuccessStatus: 200 
    })
);


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());



// routes
app.use('/api',userRoutes);
app.use('/api/', quizRoutes);


app.get('/',(req,res)=>{
    res.send("Welcome to my website");
})


app.listen(PORT,()=>{
    console.log(`Server is working on port:${PORT}`);
});





