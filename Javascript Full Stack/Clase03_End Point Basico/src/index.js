require('dotenv').config(); //to read .env file

const express = require ('express');
const morgan = require('morgan');

//INITIALIZATIONS
const app = express();
require('./database');
//Settings
app.set('port', 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tareas', require('./routes/tareas.routes')); //end point tasks
app.use('/', require('./routes/index.main.route')); //end point mainpage

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});