data = require('../Items')
 
const getItems =  (req, res) => {
  res.send(data)
}

const getItem = (req, res) => {
  const { id } = req.params;
  item = data.find((item) => item.id === id);
  res.send(item);
}

const addItem = (req, res) => {
  const {name} = req.body;
  item = {
    id: "121",
    name: name
  }
  data = [...data, item];
  res.code(201).send(item);
}

const deleteItem = (req, res) => {
  const {id} = req.body;
  console.log("from api",id)
  console.log(data.length);
  data = data.filter(data=> data.id !== id);
  console.log(data.length);
  res.send({message: `Item ${id} has been been removed`})
}

module.exports = {
  getItem,
  getItems,
  addItem,
  deleteItem
}