const express = require('express');
const app = express();
const routes = require('./routes/urlRoute');
const connection = require('./config/db');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connection('mongodb://127.0.0.1:27017/urlShortDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.get('/', (req, res) => {
    res.send("Server is running");
});
app.use('/url', routes); 
app.listen(3000, () => {
    console.log('Server started at port http://localhost:3000');
});