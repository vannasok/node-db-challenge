const db = require('../data/dbConfig.js');

module.exports = {
   get,
   getById,
   add
};

function get() {
   return db('resources');
}

function getById(id) {
   return db('resources')
      .where({ id: id })
      .first();
}

function add(resource) {
   return db('resources').insert(resource);
}
