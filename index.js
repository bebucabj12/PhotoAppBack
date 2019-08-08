
const mongoose = require('mongoose');
const app = require('./app')
const port = 3700;

//conexion a base de datos
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/photoapp')
    .then(() => {
        console.log('Connection has been established successfully.')
        //Creacion del servidor
            app.listen(port, () => {
                console.log('Server run successful on' + port)
            })

    })
    .catch(err => console.error('Unable to connect to the database:', err));




    