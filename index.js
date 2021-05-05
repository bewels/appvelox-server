const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const config = require('./config/config');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');

app.use('/api/auth', require('./route/auth'));
app.use('/', require('./route/add'));
app.use('/api', require('./route/doctor'));
app.use('/api', require('./route/records'));


async function start() {
    try{
        await mongoose.connect(config.MONGO_URI, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
           console.log(`Сервер запущен на порту ${PORT}`);
        });
    } catch (e) {
        console.log(`Произошла ошибка при запуске ${e}`);
    }
}

start();
