const express = require("express");
const router = express.Router();

// Import Controller
const {
    addOrder,
    update_order,
    del_order,
    get_order_all,
    get_order_product
} = require('../controllers/orderController');
// APIs Routing Config
router.post('/orders/', addOrder);
router.put('/orders/:id', update_order);
router.delete('/orders/:id', del_order);
router.get('/orders/', get_order_all);
router.get('/orders/:product', get_order_product);
// Export router
module.exports = router;