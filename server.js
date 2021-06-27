const fastify = require('fastify')({ loggger: true })

var PORT = '5000';
fastify.register(require('fastify-jwt'), {
  secret: 'supersecret'
})
fastify.register(require('fastify-formbody'))
fastify.register(require('./routes/users'))
fastify.register(require('./routes/items'))

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (error) {
    console.log(error)
  }
}

start();