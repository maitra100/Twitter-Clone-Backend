const mongoose=require('mongoose');
const express = require('express');
require('dotenv').config();
const cors=require('cors');
const route = require('./src/routes/routes');

const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use('/', route);


mongoose.connect("mongodb://127.0.0.1:27017/TwitterClone",{ useNewUrlParser: true ,useUnifiedTopology: true})
.then(()=> console.log("connected to mongodb"))
.catch(err => console.error("couldn't connect to mongodb"));

app.listen(port, () => {
    console.log(`app listening at port ${port}`);
  });