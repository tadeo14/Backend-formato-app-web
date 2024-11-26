const bcrypt = require('bcrypt');
const usuarioModel = require('../models/usuario-model');

const createUser = async (req, res) => {
    
    try {
        const { name, email, password } = req.body;

    //validations
    if (!name || !email || !password) {
        res.status(400).json({
            msg:'All fields are required',
    });
           
    }

    let usuario = await usuarioModel.findOne ({ email });
        if (usuario) {
		return res.status(400).json ({
					msg: 'The user is already registered',
			});
	}
        

    //add id
    const user = new usuarioModel(req.body);
    console.log(user);

        
    //encriptacion de password
    const salt = bcrypt.genSaltSync(10); //le da la robustes a nuestro numero
    user.password = bcrypt.hashSync(password, salt);
         
    
        
    //save it in the database
    await user.save();


        res.status(201).json({
            msg: 'User created',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Contact you wiht support',
        });
    }
    
};

module.exports = { createUser };