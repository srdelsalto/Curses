const {Router} = require('express');
const router = Router();

const {getPurchases, getPurchase, createPurchase} = require('../controllers/purchases.controller')

router.get('/', getPurchases);
router.get('/:id', getPurchase);
router.post('/', createPurchase);

module.exports = router;