const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path")
const hbs = require("hbs")
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

const dbconnect = async () => {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/BlogPage');
    return conn
}
dbconnect();

app.get('/', (req,res) => {
    res.send("Hello ji");
})
app.use('/api/v1', require('./routes/TodoRoutes'));
app.listen(5000, () => {
    console.log("Server started at 5000");
})
