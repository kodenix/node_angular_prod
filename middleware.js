/**
 * Módulo de lógica intermedia.
 * @module middleware
 */

/**
 * @param {object} app - al aplicación de express
 * @param {object} express - el propio framework express
 * @return configura la aplicación
 */
module.exports.useMiddleware = app => {
    const bodyParser = require('body-parser')
    
    

    // Permite recuperar como objetos JavaScript el contenido emitido por el cliente
    // tanto en parámetros
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    // como en el body
    app.use(bodyParser.json());

    
}


