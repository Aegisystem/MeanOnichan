const mongoose = require('mongoose')

const URI_DB = `mongodb://localhost:27017`

module.exports = () =>  {
    const connect = () =>  {
        mongoose.connect(
            URL_DB,
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