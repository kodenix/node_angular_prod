/** Carga de módulos de librerías estándar */
// express
const express = require('express');

// Se usa para unir diferentes string por /
const path = require('path');

// aplicación express
const app = express();

/** Carga de middleware */
const middleware = require('./middleware');
middleware.useMiddleware(app);

const options = {
        extensions: ['htm', 'html'],
        maxAge: '1d',
        setHeaders: res => res.set('x-timestamp', Date.now())
    }

/** Contenido estatico */
app.use(express.static(path.join(__dirname,'html'), options));

/** Arranque del servidor */
app.listen(3030);
console.log('listening on port 3030');