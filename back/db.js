const mongoose = require('mongoose')
require('dotenv').config()

module.exports = () =>  {
    const connect = () =>  {
        mongoose.connect(
            process.env.MONGO_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (error) =>  {
                if(error)   {
                    console.log('Explotó algo al conectar la base de datos')
                }
                else    {
                    console.log('Conexión con DB exitosa :D')
                }
            }
        )
    }
    connect();
}