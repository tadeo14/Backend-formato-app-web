const { Schema, model } = require ('mongoose');

const ProductSchema = Schema({
    nameProduct: {
        type: String,
        required: true,
    },
	  
    serialNumber: {
        type: Number,
        required: true,
        unique: true,
    },

    serialNumber: {
        type: Number,
        required: true,
        unique: true,
    },
	
    price: {
        type: Number,

    },

    brand: {
        type: String,
    },

    description: {
        type: String,
    },
    image: {
        type: String,
    },
      
});
				
module.exports = model('Product', ProductSchema);