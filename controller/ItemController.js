data = require('../Items')

const getItems = async (req, res) => {
  try {
    await req.jwtVerify()
    res.send(data)
  } catch (err) {
    res.send(err)
  }
}

const getItem = async (req, res) => {
  try {
    await req.jwtVerify()
    const { id } = req.params
    item = data.find((item) => item.id === id)
    res.send(item)
  } catch (err) {
    res.send(err)
  }
}

const addItem = async (req, res) => {
  try {
    await req.jwtVerify()
    const { name } = req.body
    item = {
      id: '121',
      name: name,
    }
    data = [...data, item]
    res.code(201).send(item)
  } catch (err) {
    res.send(err)
  }
}

const deleteItem = async (req, res) => {
  try {
    await req.jwtVerify()
    const { id } = req.body
    data = data.filter((data) => data.id !== id)
    res.send({ message: `Item ${id} has been been removed` })
  } catch (err) {
    res.send(err)
  }
}

module.exports = {
  getItem,
  getItems,
  addItem,
  deleteItem,
}
