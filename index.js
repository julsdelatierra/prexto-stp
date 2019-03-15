'use strict'

const Hapi=require('hapi')

// Create a server with a host and port
const server=Hapi.server({
    host: 'localhost',
    port: 9009
})

// Add the route
server.route({
    method:'POST',
    path:'/stp/state/change',
    handler: function(request, h) {
        return {
            ok: true
        }
    }
})

server.route({
  method:'GET',
  path:'/partners/me',
  handler: (request, h) => {
    return {
      'driver_id': '8LvWuRAq2511gmr8EMkovekFNa2848lyMaQevIto-aXmnK9oKNRtfTxYLgPq9OSt8EzAu5pDB7XiaQIrcp-zXgOA5EyK4h00U6D1o7aZpXIQah--U77Eh7LEBiksj2rahB==',
      'first_name': 'Joaquín',
      'last_name': 'Moreno Pérez',
      'email': 'uber.developer+tester@example.com',
      'phone_number': '+14155550000',
      'picture': 'https://d1w2poirtb3as9.cloudfront.net/16ce502f4767f17b120e.png',
      'promo_code': 'ubert4544ue',
      'rating': 5,
      'activation_status': 'active'
    }
  }
})

// Start the server
const start =  async function() {

    try {
        await server.start()
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }

    console.log('Server running at:', server.info.uri)
}

start()