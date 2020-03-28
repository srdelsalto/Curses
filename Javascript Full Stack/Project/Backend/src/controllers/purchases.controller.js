const PurchaseModel = require('../models/Purchase');
const moment = require('moment');
const ProductModel = require('../models/Product')

//SET THE TIMEZONE
moment.locale('es');

module.exports = {
    async getPurchases(req, res) {
        try {
            const purchases = await PurchaseModel.find();
            res.json({ purchases });
        } catch (error) {
            res.json({
                success: false,
                message: 'No se pudo obtener las compras'
            });
        }
    },

    async getPurchase(req, res) {
        try {
            const purchase = await PurchaseModel.findOne({ _id: req.params.id });
            res.json({
                product: purchase.product.name,
                price_per_unit: purchase.product.price,
                quantity: purchase.quantity,
                total_ammount: purchase.total_ammount
            });
        } catch (error) {
            res.json({
                success: false,
                message: 'No se pudo obtener las compra'
            });
        }
    },

    async createPurchase(req, res) {

        const { product, quantity } = req.body;

        if (!product) {
            return res.json({
                success: false,
                message: 'Debe agregar un producto'
            });
        } else if (!quantity) {
            return res.json({
                success: false,
                message: 'Debe especificar la cantidad a comprar'
            });
        }

        try {
            const productOnCart = await ProductModel.findOne({ _id: product });

            if (productOnCart.stock >= quantity) {
                const total_ammount = quantity * productOnCart.price;
                const date = moment().format('L');

                const newPurchase = new PurchaseModel({
                    product,
                    quantity,
                    total_ammount,
                    date
                });
                await newPurchase.save();
                productOnCart.stock = productOnCart.stock - quantity;
                await productOnCart.save();
                res.json({
                    success: true,
                    message: 'Compra realizada con éxito',
                    data: newPurchase
                })
            } else {
                res.json({
                    success: 'false',
                    message: 'La cantidad sobrepasa la existencia del producto'
                })
            }


        } catch (error) {
            res.json({
                success: 'false',
                message: 'No se pudo realizar la compra'
            })
        }
    }
}