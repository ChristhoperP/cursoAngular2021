const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {


    const { name, email, password } = req.body;

    try {
        // Verificar el email
        const usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe.'
            });
        }

        // Crear usuario con el modelo
        const dbUser = new Usuario(req.body);


        // Hashear la contrasenia
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);


        // Generar el JWT
        const token = await generarJWT(dbUser.id, name);


        // Crear el usuario de BD
        await dbUser.save();


        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            msg: 'Se creo el usuario exitosamente.',
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el admin.'
        })
    }
}

const loginUsuario = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        const dbUser = await Usuario.findOne({email});

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe.'
            });
        }
        
        // Confirmar si el password hace match
        const validPassword = bcrypt.compareSync(password, dbUser.password);
        
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'El password no es correcto.'
            });
        }

        const token = await generarJWT(dbUser.id, dbUser.name);

        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email,
            token
        })

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el admin.'
        })
    }
}

const revalidarToken = async(req, res = response) => {

    const {uid} = req;

    //Leer la base de datos
    const dbUser = await Usuario.findById(uid);

    // Generar el JWT
    const token = await generarJWT(uid, dbUser.name);

    return res.json({
        ok: true,
        msg: 'Renew',
        uid,
        name: dbUser.name,
        email: dbUser.email,
        token
    })
};


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}