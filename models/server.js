const express = require('express')
const cors = require('cors')
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routesUserPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    routes(){
        this.app.use(this.routesUserPath, require('../routes/usuarios'));
    }

    middlewares(){

        //cors 
        this.app.use(cors());

        // Lectura y Parseo del Boddy

        this.app.use( express.json() );
       
        //Directorio publico
        this.app.use(express.static('public'));
    }

    listen(){
      this.app.listen(this.port, ()=> {
        console.log('Servidor corriendo en puerto', this.port);
      })
    }
}

module.exports = Server;