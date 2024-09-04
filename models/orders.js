const mongoose = require("mongoose");

// Define Schame wit timestamps and disable versionKey
const Oders = new mongoose.Schema(
    // Define Model
    {
        customer_name: { type: String, required: true
        },
        product: { type: String, required: true
        },
        quantity: { type: Number, required: true
        },
        order_date: { type: String, required: true
        },
        status: { type: String, required: true
        },
    }, 
    {
        timestamps:true,
        versionKey:false
    }
);
// Export Model
module.exports = mongoose.model('Order', Oders, 'Order');