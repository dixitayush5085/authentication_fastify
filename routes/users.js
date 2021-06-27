function userRoutes(fastify, option, done) {
  // this token can used in fronr-end side for accessing the other routes
  var token;

  // this path is used for login purpose and generating token
  fastify.post('/user/login', async (req, res) => {
    const { email, password } = req.body
    const user = {
      email: email,
      password: password,
    }
    token = fastify.jwt.sign(user)
    res.send({
      req: user,
      token: token,
    })
  })

  // this path will be accessible only if user is logged in...
  fastify.get('/user/home', async (request, reply) => {
    try {
      await request.jwtVerify()
      reply.send(request.user)
    } catch (err) {
      reply.send(err)
    }
  })

  done();
}

module.exports = userRoutes
