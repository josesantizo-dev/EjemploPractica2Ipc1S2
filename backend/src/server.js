const express = require('express');
const app = express();
//importar cors
const cors = require('cors');

//configuraciones
app.use(express.json());
app.use(cors());

//mis rutas
const rutasUsuarios = require('./rutas/usuarios');

app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
    res.send('Hola alumnos de ipc1');
});

app.use('/usuarios',rutasUsuarios);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

module.exports = app;