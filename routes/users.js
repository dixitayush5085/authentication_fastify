function userRoutes(fastify, option, done) {
  var token;
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
