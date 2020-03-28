const {Router} = require('express');
const router = Router();

const {getProduct, getProducts, createProduct, updateProduct, deleteProduct} = require('../controllers/products.controller')

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct)
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;