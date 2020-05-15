var {io} = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion.'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar al Cliente
    client.on('enviarMensaje', (msg, callback) => {
        console.log(msg);

        client.broadcast.emit('enviarMensaje', msg) //BROADCAST EMITE A TODOS LOS CLIENTES.

        // if(msg.usuario){
        //     callback({
        //         resp: 'TODO SALIO OK!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!'
        //     });
        // }
    }); 
});