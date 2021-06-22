const path = require ('path');

module.exports = {
    index: function (req, res) {
        const rutaVistaHome = path.resolve(__dirname, '../views/home.html');
        res.sendFile(rutaVistaHome)
    }
}

saludar: function (req, res) {
    const nombre= req.params.nombre;
    res.send ('Hola '+ nombre);
}