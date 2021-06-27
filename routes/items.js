const {getItem, getItems, addItem, deleteItem } = require('../controller/ItemController');

const itemSchema = {
  type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
    }
}

const getItemsOpts = {
  schema: {
    body: {
      type : 'object',
      required: ['name'],
      properties: {
        name: { type: 'string'}
      }
    },
    response: {
      200: {
        type: 'array',
        item: itemSchema
      },
    },
  },
  handler: getItems,
}

const getItemOpts = {
  schema: {
    response: {
      200: itemSchema
    }
  },
  handler: getItem
}

const postItemOpts = {
  schema: {
    response : {
      201: itemSchema
    }
  },
  handler: addItem
}

const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: {type: 'string'}
        }
      }
    }
  },
  handler: deleteItem
}

function itemRoutes(fastify, option, done) {
  fastify.get('/items', getItemsOpts);
  fastify.get('/items/:id', getItemOpts);
  fastify.post('/items', postItemOpts);
  fastify.delete('/items/:id',deleteItemOpts)
  done()
}

module.exports = itemRoutes
