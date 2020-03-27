const { Router } = require('express');
const router = Router();

const {getTareas, getTarea, createTarea, updateTarea, deleteTarea} = require('../controller/tareas.controller');

//Rest API Task

router.get('/', getTareas);
router.get('/:id', getTarea);
router.post('/', createTarea);
router.put('/:id', updateTarea);
router.delete('/:id', deleteTarea);

module.exports = router; 