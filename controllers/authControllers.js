
const usuarioModel = require('../models/usuario-model');

const createUser = async (req, res) => {
    
    try {
        const { name, email, password } = req.body;

    //validations
    if (!name || !email || !password) {
        res.send('All fields are required');
    }

    let usuario = await usuarioModel.findOne ({ email });
        if (usuario) {
		return res.json ({
					msg: 'The user is already registered',
			});
	}
        

    //add id
    const user = new usuarioModel(req.body);
    console.log(user);

    //save it in the database
    await user.save();


        res.json({
            msg: 'User created',
        });
    } catch (error) {
        console.error(error);
    }
    
};

module.exports = { createUser };