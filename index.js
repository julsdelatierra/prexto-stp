'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host: 'localhost',
    port: 9009
});

// Add the route
server.route({
    method:'GET',
    path:'/stp/state/change',
    handler: function(request, h) {
        const params = request.payload

        return {
            ok: true,
            data: {
                id: '58fd1259',
                estado: params.estado, //Devolución
                detalle: ''
            }
        };
    }
});

// Start the server
const start =  async function() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();