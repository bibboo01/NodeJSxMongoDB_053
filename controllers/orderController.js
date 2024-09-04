// Import Model
const Order = require('../models/orders');
// Function add and export
exports.addOrder = async (req, res) => {
    const {
        customer_name,
        product,
        quantity,
        order_date,
        status
    } = req.body;
    const order = new Order({
        customer_name,
        product,
        quantity,
        order_date,
        status
    })
    try {
        const adddata = await order.save();
        res.status(201).json(adddata);
        console.log('Post successful');
        
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
}
// Function update and export
exports.update_order = async (req, res) => {

    try {
        const {
            id
        } = req.params;
        const data = {
            $set: req.body
        }
        const update_data = await Order.findByIdAndUpdate(
            id,
            data
        );
        res.json(update_data);
        console.log('Update successful');
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
}
// Function delete and export
exports.del_order = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const del_order = await Order.findByIdAndDelete(id);
        res.json(del_order);
        console.log('Delete successful');
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
}
// Function get all data and export
exports.get_order_all = async (req, res) => {
    try {
        const get_all = await Order.find();
        res.status(201).json(get_all);
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
}
// Function get data by genre and export
exports.get_order_product = async (req, res) => {
    try {
        const {
            product
        } = req.params;
        const get_all = await Order.find({
            product: product
        });
        res.status(201).json(get_all);
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
}