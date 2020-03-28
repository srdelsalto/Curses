const express = require('express');
const morgan = require('morgan');
const path = require('path');
const SockerIO = require('socket.io');

require('dotenv').config();

const app = express();

//SETTINGS
app.set('port', process.env.PORT || 4000);
require('./database')

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

//ROUTES
app.use('/api/products', require('./routes/products.routes'))
app.use('/api/purchases', require('./routes/purchases.routes'))

//STARTING SERVER
const server = app.listen(app.get('port'), () => {
    console.log('Server Up on port', app.get('port'));
});

const ioSocket = SockerIO(server);

ioSocket.on('connect', () =>{
    console.log('Alguien conectándose');
});