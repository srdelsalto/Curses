const tareaController = {};

const TareaModel = require('../models/Tarea');

tareaController.getTareas = async (req, res) => {
    try {
        const tareas = await TareaModel.find();
        res.json(tareas);
    } catch (error) {
        console.log(error);
    }
};

tareaController.getTarea = async (req, res) => {
    try {
        const tarea = await TareaModel.findById(req.params.id);
        res.json({
            data: tarea
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'No se ha encontrado tarea'
        })
    }
};

tareaController.createTarea = async (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.json({
            success: false,
            message: 'El titulo no puede estar vacio'
        })
    } else if (!description) {
        return res.json({
            success: false,
            message: 'La descripcion no puede estar vacio'
        })
    } else {
        const newTarea = new TareaModel({
            title,
            description
        })
        try {
            await newTarea.save();
            res.json({
                newTarea
            })
        } catch (error) {
            res.json({
                success: false,
                message: 'No se ha creado la tarea'
            })
        }
    }
};

tareaController.updateTarea = async (req, res) => {
    try {
        await TareaModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
        res.json({
            success: true,
            message: 'Actualizado correctamente la tarea'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Ha ocurrido un error'
        });
    }
};

tareaController.deleteTarea = async (req, res) => {
    try {
        await TareaModel.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: 'Tarea eliminada correctamente'
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Ha ocurrido un error'
        })
    }

    res.json({
        message: 'Eliminando Tarea',
        idTarea: req.params.id
    });
};

module.exports = tareaController;