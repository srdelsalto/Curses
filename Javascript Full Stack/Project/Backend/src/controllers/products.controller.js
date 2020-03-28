const ProductModel = require('../models/Product');

module.exports = {
    async getProduct(req, res) {
        try {
            const product = await ProductModel.findById(req.params.id);
            res.json(product);
        } catch (error) {
            res.json({
                success: false,
                message: 'No se pudo obtener el producto'
            });
        }
    },

    async getProducts(req, res) {
        try {
            const products = await ProductModel.find();
            res.json(products);
        } catch (error) {
            res.json({
                success: false,
                message: 'No se puede obtener los productos'
            });
        }
    },

    async createProduct(req, res) {
        const {name, price, stock} = req.body;

        if(!name || !price || !stock){
            return res.json({
                success: false,
                message: 'Ninguno de los campos puede estar vacío'
            });
        }

        try {
            const newProduct = new ProductModel({
                name,
                price,
                stock
            });
            await newProduct.save();
            res.json({
                success: true,
                data: newProduct
            });
        } catch (error) {
            res.json({
                success: true,
                message: 'No se pudo crear el producto'
            });
        }
    },

    async updateProduct(req, res) {
        try {
            await ProductModel.findByIdAndUpdate({_id: req.params.id}, req.body);

            res.json({
                success: true,
                message: 'Producto actualizado',
                data: req.body
            });

        } catch (error) {
            res.json({
                success: false,
                message: 'Producto no actualizado'
            });
        }
    },

    async deleteProduct(req, res) {
        try {
            await ProductModel.findByIdAndDelete({_id: req.params.id});
            res.json({
                success: true,
                message: 'Producto eliminado'
            });
        } catch (error) {
            res.json({
                success: false,
                message: 'Producto no eliminado'
            })
        }
    }
}