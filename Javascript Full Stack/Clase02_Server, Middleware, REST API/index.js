const express = require('express');


const app = express();

//settings
app.set('port',3000);

//Middlewares
app.use(express.json());

//Routes /REST API
app.get('/', (req, res) =>{
    //Product.find()
    res.json({
        message: 'Leyendo recursos'
    });
});

app.get('/:id',(req, res) =>{
    //Product.findById()
    res.json({
        message: 'Leyendo un recurso'
    });
});

app.post('/', (req, res) =>{
    res.json(req.body);
    console.log(req.body);
})

app.delete('/:id', (req,res) =>{
    //Product.findIdAndDelete()
    res.json({
        message: "Eliminando recurso",
        id_recurso: req.params.id
    })
});

app.put('/:id', (req,res) =>{
    res.json({
        message: "Actualizando recurso",
        id_recurso: req.params.id,
        data: req.body
    });
});

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});