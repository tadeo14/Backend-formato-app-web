const bcrypt = require('bcrypt');
const usuarioModel = require('../models/usuario-model');
var jwt = require('jsonwebtoken');


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

const getUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === '' || password === '') {
            res.status(400).json({
                msg: 'All fields are required',
            });
        }
        
    
        //verificamos si el usuario existe
        let usuario = await usuarioModel.findOne ({ email });
        if (!usuario) {
            return res.status(400).json({
                msg: 'El usuario o contraseña no existe',
            });
        }
    
        //validar password, comparo la contraseña del correo que ingrese con la que ingreso el Usuario
        const validarPassword = bcrypt.compareSync(password, usuario.password ); // true
        if (!validarPassword) {
            res.status(400).json({
                msg: 'El usuario o contraseña no existe',
            });
        }
    
        const payload = {
            id: usuario._id,  // Incluyendo el ID del usuario en el payload del token
            name: usuario.name,
            rol: usuario.rol,
        };
    
        const token = jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '3h' });
    
    
        res.status(200).json({
                msg: 'Login exitoso',
                token,
                rol: usuario.rol,
            });

    }catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contactarse con un administrador',
        });
    }
   

    };




module.exports = { createUser, getUser };