
const usuarioModel = require('../models/usuario-model');

const createUser = async (req, res) => {
    
    try {
        const { name, email, password } = req.body;

    //validations
    if (!name || !email || !password) {
        res.send('All fields are required');
    }


    //add id
    const user = new usuarioModel(req.body);
    console.log(user);

    //save it in the database
    await user.save();


    res.send('User created');
    } catch (error) {
        console.error(error);
    }
    
};

module.exports = { createUser };